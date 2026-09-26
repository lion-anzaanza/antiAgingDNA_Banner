"use server";

import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

const COOKIE_NAME = "lifedna_admin";
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 7; // 7일
const WRONG_PASSWORD_DELAY_MS = 1000; // 자동 대입 공격 속도를 늦추기 위한 지연

// 쿠키에는 비밀번호가 아니라 "만료시각 + 그 시각의 서명"만 담는다.
// 만료시각이 서명에 포함되므로 값을 고쳐서 기한을 늘릴 수 없고,
// 비밀번호를 바꾸면 서명이 달라져 기존 로그인은 모두 풀린다.
function sign(password: string, expiresAt: number) {
  return createHmac("sha256", password).update(`lifedna-admin-v2:${expiresAt}`).digest("hex");
}

// 길이가 달라도 비교 시간이 달라지지 않도록, 항상 같은 길이인 해시끼리 비교한다.
function safeEqual(a: string, b: string) {
  const hashA = createHash("sha256").update(a).digest();
  const hashB = createHash("sha256").update(b).digest();
  return timingSafeEqual(hashA, hashB);
}

export async function isLoggedIn() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;

  const cookie = (await cookies()).get(COOKIE_NAME)?.value;
  if (!cookie) return false;

  const [expiresAt, signature] = cookie.split(".");
  const expiry = Number(expiresAt);
  if (!signature || !Number.isFinite(expiry) || expiry < Date.now()) return false;

  return safeEqual(signature, sign(password, expiry));
}

export type LoginResult = { status: "idle" | "wrong" | "not_configured" };

export async function login(_prev: LoginResult | null, formData: FormData): Promise<LoginResult> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    console.error("ADMIN_PASSWORD 환경변수가 설정되지 않아 관리자 로그인을 처리할 수 없습니다.");
    return { status: "not_configured" };
  }

  const input = String(formData.get("password") ?? "");
  if (!safeEqual(input, password)) {
    await new Promise((resolve) => setTimeout(resolve, WRONG_PASSWORD_DELAY_MS));
    return { status: "wrong" };
  }

  const expiresAt = Date.now() + MAX_AGE_MS;
  (await cookies()).set(COOKIE_NAME, `${expiresAt}.${sign(password, expiresAt)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge: MAX_AGE_MS / 1000,
  });
  // 쿠키를 심은 뒤 명단 화면으로 바꿔 그린다. replace라서 뒤로가기에 로그인 화면이 남지 않는다.
  redirect("/admin", RedirectType.replace);
}

export async function logout() {
  (await cookies()).delete({ name: COOKIE_NAME, path: "/admin" });
  redirect("/admin", RedirectType.replace);
}
