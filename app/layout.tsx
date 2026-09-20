import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import MeshBackground from "@/components/MeshBackground";
import "./globals.css";

const SITE_URL = "https://lifedna.anzaanza.cloud";
const TITLE = "LifeDNA — 사전예약";
const DESCRIPTION = "매일의 기록으로 나를 유전자처럼 읽어내는 웰니스 앱, LifeDNA 사전예약";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  // SNS(카카오톡·인스타그램·X 등)에 링크를 올릴 때 보이는 미리보기 카드
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "LifeDNA",
    title: TITLE,
    description: DESCRIPTION,
    locale: "ko_KR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "LifeDNA 사전예약" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        {/* Pretendard 웹폰트 (한글 본문용, 새 npm 패키지 없이 CDN으로만) */}
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body className="min-h-full min-w-0 flex flex-col">
        <MeshBackground />
        {children}
        {/* Vercel 방문 분석 — 쿠키 없이 방문·페이지뷰만 집계. 100명 목표의 전환율(방문 대비 신청) 확인용 */}
        <Analytics />
      </body>
    </html>
  );
}
