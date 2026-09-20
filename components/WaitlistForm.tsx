"use client";

import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";
import { subscribeToWaitlist, type SubscribeResult } from "@/app/actions";
import { PrimaryButton } from "./Button";
import { cardClass } from "@/lib/ui";
import ShareButtons from "./ShareButtons";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <PrimaryButton type="submit" disabled={pending} className="shrink-0 whitespace-nowrap">
      {pending ? "신청 중..." : "사전예약 신청"}
    </PrimaryButton>
  );
}

const initialState: SubscribeResult | null = null;

export default function WaitlistForm() {
  const [state, formAction] = useActionState(subscribeToWaitlist, initialState);
  const emailId = useId();

  if (state?.status === "success" || state?.status === "duplicate") {
    return (
      <div className={`${cardClass} animate-pop-in p-6 text-center`} role="status">
        <p className="text-[20px] font-extrabold text-[var(--text)]">
          {state.status === "success" ? "신청 완료! 🎉" : "이미 신청하셨어요 🙂"}
        </p>
        <p className="mt-2 text-[16px] text-[var(--text-soft)]">
          가장 먼저 이메일로 알려드릴게요. 스팸 없이 딱 한 번만요.
        </p>
        <div className="mt-5">
          <ShareButtons />
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="w-full">
      <label htmlFor={emailId} className="sr-only">
        이메일 주소
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={emailId}
          type="email"
          name="email"
          required
          placeholder="이메일 주소를 입력하세요"
          className="min-h-[44px] min-w-0 flex-1 rounded-[var(--radius-sm)] border border-[var(--line)] bg-[var(--card-alpha)] px-4 py-3 text-[16px] text-[var(--text)] placeholder:text-[var(--text-soft)] backdrop-blur-sm transition-colors duration-200 focus:border-[var(--accent-lilac)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-lilac)]/30"
        />
        <SubmitButton />
      </div>
      <div aria-live="polite" className="mt-2 min-h-[1.25rem] text-[15px] font-semibold">
        {state?.status === "invalid" && (
          <span className="text-[var(--danger)]">이메일 형식을 다시 확인해주세요.</span>
        )}
        {state?.status === "not_configured" && (
          <span className="text-[var(--danger)]">
            아직 신청을 받을 준비가 안 됐어요. (Supabase 설정 필요 — docs/spec.md 참고)
          </span>
        )}
        {state?.status === "error" && (
          <span className="text-[var(--danger)]">잠시 후 다시 시도해주세요.</span>
        )}
      </div>
    </form>
  );
}
