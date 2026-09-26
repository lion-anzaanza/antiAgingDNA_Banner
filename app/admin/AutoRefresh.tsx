"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// 30초마다 서버에서 명단을 다시 받아온다 (화면 전체를 새로 그리지 않아 스크롤 위치가 유지된다).
export default function AutoRefresh({ seconds = 30 }: { seconds?: number }) {
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => router.refresh(), seconds * 1000);
    return () => clearInterval(timer);
  }, [router, seconds]);

  return null;
}
