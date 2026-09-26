"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login, type LoginResult } from "./actions";
import { PrimaryButton } from "@/components/Button";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <PrimaryButton type="submit" disabled={pending} className="w-full">
      {pending ? "확인 중..." : "들어가기"}
    </PrimaryButton>
  );
}

export default function LoginForm() {
  const [state, formAction] = useActionState<LoginResult | null, FormData>(login, null);

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <label htmlFor="admin-password" className="sr-only">
        관리자 비밀번호
      </label>
      <input
        id="admin-password"
        type="password"
        name="password"
        required
        autoFocus
        placeholder="비밀번호"
        className="min-h-[44px] w-full rounded-[var(--radius-sm)] border border-[var(--line)] bg-[var(--card-alpha)] px-4 py-3 text-[16px] text-[var(--text)] placeholder:text-[var(--text-soft)] backdrop-blur-sm transition-colors duration-200 focus:border-[var(--accent-lilac)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-lilac)]/30"
      />
      <SubmitButton />
      <div aria-live="polite" className="min-h-[1.25rem] text-[15px] font-semibold">
        {state?.status === "wrong" && (
          <span className="text-[var(--danger)]">비밀번호가 맞지 않아요.</span>
        )}
        {state?.status === "not_configured" && (
          <span className="text-[var(--danger)]">아직 관리자 설정이 끝나지 않았어요.</span>
        )}
      </div>
    </form>
  );
}
