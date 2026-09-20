"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PrimaryLinkButton } from "./Button";

// 스크롤을 조금이라도 내리면 배경을 더 불투명하게, 테두리와 그림자를 켜서 본문과 구분한다.
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="animate-header-enter sticky top-0 z-40 border-b backdrop-blur-md transition-all duration-300"
      style={{
        background: `color-mix(in srgb, var(--bg) ${scrolled ? 92 : 78}%, transparent)`,
        borderColor: scrolled ? "var(--line)" : "transparent",
        boxShadow: scrolled ? "var(--shadow-soft)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-[1040px] items-center justify-between px-5 py-3">
        <span className="flex items-center gap-2">
          <Image src="/logo.png" alt="LifeDNA 로고" width={32} height={32} className="rounded-[10px]" />
          <span className="text-[17px] font-extrabold tracking-tight">
            Life
            <span
              className="animate-grad-shift bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--grad-main)" }}
            >
              DNA
            </span>
          </span>
        </span>
        <PrimaryLinkButton href="#waitlist-form">사전예약</PrimaryLinkButton>
      </div>
    </header>
  );
}
