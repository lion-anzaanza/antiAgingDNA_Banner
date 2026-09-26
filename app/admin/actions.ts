"use server";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "lifedna_admin";
const MAX_AGE = 60 * 60 * 24 * 7; // 7일

// 쿠키에는 비밀번호가 아니라 비밀번호로 만든 서명값만 담는다.
// 비밀번호를 바꾸면 서명값이 달라져 기존 로그인은 자동으로 풀린다.
function signature(password: string) {
  return createHmac("sha256", password).update("lifedna-admin-v1").digest("hex");
}

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export async function isLoggedIn() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  const cookie = (await cookies()).get(COOKIE_NAME)?.value;
  if (!cookie) return false;
  return safeEqual(cookie, signature(password));
}

export type LoginResult = { status: "idle" | "wrong" | "not_configured" };

export async function login(_prev: LoginResult | null, formData: FormData): Promise<LoginResult> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return { status: "not_configured" };

  const input = String(formData.get("password") ?? "");
  if (!safeEqual(input, password)) {
    return { status: "wrong" };
  }

  (await cookies()).set(COOKIE_NAME, signature(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge: MAX_AGE,
  });
  // 쿠키를 심은 뒤 명단 화면으로 다시 들어간다 (서버 화면을 새로 그리기 위해)
  redirect("/admin");
}

export async function logout() {
  (await cookies()).delete({ name: COOKIE_NAME, path: "/admin" });
  redirect("/admin");
}
