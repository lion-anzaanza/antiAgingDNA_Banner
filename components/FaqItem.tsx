"use client";

import { useId, useState, type ReactNode } from "react";
import { cardClass, iconBadgeStyle } from "@/lib/ui";

/**
 * FAQ 아코디언 한 줄. <details>를 쓰지 않고 직접 만든 이유는
 * 펼칠 때 높이가 부드럽게 늘어나는 애니메이션(grid-template-rows 0fr→1fr)을 주기 위해서다.
 */
export default function FaqItem({
  icon,
  tint,
  q,
  a,
  defaultOpen = false,
}: {
  icon: ReactNode;
  tint: string;
  q: string;
  a: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className={cardClass}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
      >
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)]"
          style={iconBadgeStyle(tint)}
        >
          {icon}
        </span>
        <span className="flex-1 text-[16px] font-bold sm:text-[17px]">{q}</span>
        <span
          aria-hidden
          className="shrink-0 text-[14px] font-bold text-[var(--text-soft)] transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▾
        </span>
      </button>
      <div
        id={panelId}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[15px] leading-[1.8] text-[var(--text-soft)] sm:px-6 sm:pl-[4.25rem]">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}
