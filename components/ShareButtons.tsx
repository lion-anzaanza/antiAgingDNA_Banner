"use client";

import { useState } from "react";
import { PrimaryButton } from "./Button";

const SHARE_TEXT =
  "웨어러블 없이도 나만의 웰니스 유전자를 만드는 앱, LifeDNA 사전예약 시작했어요!";
const SHARE_URL = "https://lifedna.anzaanza.cloud";

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "LifeDNA", text: SHARE_TEXT, url: SHARE_URL });
      } catch {
        // 사용자가 공유를 취소한 경우 — 아무것도 하지 않음
      }
      return;
    }
    await handleCopy();
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(`${SHARE_TEXT} ${SHARE_URL}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 접근 실패 — 조용히 무시
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <PrimaryButton type="button" onClick={handleShare}>
        친구에게 공유하기
      </PrimaryButton>
      <button
        type="button"
        onClick={handleCopy}
        className="text-[15px] font-bold text-[var(--text-soft)] underline underline-offset-2"
      >
        {copied ? "링크가 복사됐어요!" : "링크 복사하기"}
      </button>
    </div>
  );
}
