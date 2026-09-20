import Link from "next/link";
import { containerClass, headingTextClass, bodyTextClass } from "@/lib/ui";

export const metadata = {
  title: "개인정보처리방침 | LifeDNA",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-16" style={{ color: "var(--text)" }}>
      <div className={containerClass}>
        <Link
          href="/"
          className="text-[15px] font-bold underline underline-offset-2"
          style={{ color: "var(--accent-lilac)" }}
        >
          ← 홈으로
        </Link>
        <h1 className={`mt-4 ${headingTextClass}`}>개인정보처리방침</h1>
        <p className="mt-2 text-[13px] text-[var(--text-soft)]">
          시행일: 2026년 9월 20일
        </p>

        <div className={`mt-8 space-y-8 ${bodyTextClass}`}>
          <section>
            <h2 className="text-[19px] font-bold">1. 수집하는 개인정보 항목</h2>
            <p className="mt-2">
              LifeDNA 사전예약 페이지는 사전예약 신청을 위해 아래 정보만 수집합니다.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>이메일 주소</li>
              <li>신청 일시</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[19px] font-bold">2. 개인정보 수집·이용 목적</h2>
            <p className="mt-2">
              수집한 이메일 주소는 LifeDNA 출시 소식 및 사전예약 관련 안내를 전달하는 목적으로만
              사용합니다. 별도 동의 없이 마케팅·광고성 정보를 발송하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold">3. 보유 및 이용 기간</h2>
            <p className="mt-2">
              사전예약 안내 목적이 달성될 때까지(서비스 정식 출시 후 안내 발송 시까지) 보관하며,
              목적 달성 후에는 지체 없이 파기합니다. 이용자가 삭제를 요청하는 경우에도 지체 없이
              삭제합니다.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold">4. 개인정보 처리 위탁</h2>
            <p className="mt-2">
              수집된 이메일 주소는 데이터베이스 서비스인 Supabase(Supabase Inc.)의 서버에
              저장됩니다. 별도의 제3자 마케팅 목적 제공은 하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold">5. 이용자의 권리</h2>
            <p className="mt-2">
              이용자는 언제든지 등록한 이메일 주소의 열람·정정·삭제를 요청할 수 있습니다. 아래
              연락처로 요청해 주시면 지체 없이 조치하겠습니다.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold">6. 문의처</h2>
            <p className="mt-2">
              개인정보 관련 문의는 아래로 연락해 주세요.
              <br />
              담당자: 차정은
              <br />
              이메일: chaje0119@naver.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
