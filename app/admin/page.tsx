import type { Metadata } from "next";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";
import { cardClass, containerClass, headingTextClass } from "@/lib/ui";
import { isLoggedIn, logout } from "./actions";
import LoginForm from "./LoginForm";
import AutoRefresh from "./AutoRefresh";

// 항상 최신 명단을 보여준다 (빌드 시점에 미리 만들어두지 않는다).
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "사전예약자 명단 — LifeDNA",
  robots: { index: false, follow: false },
};

const dateFormat = new Intl.DateTimeFormat("ko-KR", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Seoul",
});

export default async function AdminPage() {
  if (!(await isLoggedIn())) {
    return (
      <main className={`flex min-h-screen items-center justify-center py-16 ${containerClass}`}>
        <div className={`${cardClass} w-full max-w-[380px] p-7`}>
          <h1 className="text-[22px] font-bold">사전예약자 명단</h1>
          <p className="mt-2 text-[15px] text-[var(--text-soft)]">
            비밀번호를 입력하면 명단을 볼 수 있어요.
          </p>
          <div className="mt-5">
            <LoginForm />
          </div>
        </div>
      </main>
    );
  }

  // 표에는 최신 ROW_LIMIT건만 그리고, 총인원은 count로 따로 센다
  // (select만 쓰면 Supabase 기본 상한 1000건에서 숫자가 조용히 잘린다).
  const ROW_LIMIT = 500;
  const supabase = getSupabaseAdminClient();
  const { data, count, error } = supabase
    ? await supabase
        .from("waitlist")
        .select("email, created_at", { count: "exact" })
        .order("created_at", { ascending: false })
        .limit(ROW_LIMIT)
    : { data: null, count: null, error: { message: "관리자 설정이 아직 끝나지 않았어요." } };

  const total = count ?? data?.length ?? 0;
  const truncated = data ? total > data.length : false;

  return (
    <main className={`py-16 ${containerClass}`}>
      <AutoRefresh />
      <div className="flex items-baseline justify-between gap-4">
        <h1 className={headingTextClass}>사전예약자 명단</h1>
        <form action={logout}>
          <button
            type="submit"
            className="text-[15px] font-semibold text-[var(--text-soft)] underline underline-offset-2"
          >
            로그아웃
          </button>
        </form>
      </div>

      {error ? (
        <p className="mt-6 text-[16px] font-semibold text-[var(--danger)]">
          명단을 불러오지 못했어요. {error.message}
        </p>
      ) : (
        <>
          <p className="mt-3 text-[18px] text-[var(--text-soft)]">
            지금까지 <span className="font-extrabold text-[var(--text)]">{total}명</span>이 신청했어요.
            30초마다 자동으로 새로고침됩니다.
            {truncated && ` 아래 표에는 최근 ${data?.length ?? 0}명만 보여드려요.`}
          </p>

          <div className={`${cardClass} mt-6 overflow-hidden`}>
            {data && data.length > 0 ? (
              <table className="w-full text-left text-[15px]">
                <thead className="border-b border-[var(--line)] text-[var(--text-soft)]">
                  <tr>
                    <th className="px-5 py-3 font-bold">이메일</th>
                    <th className="px-5 py-3 font-bold whitespace-nowrap">신청 일시</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row) => (
                    <tr key={row.email} className="border-b border-[var(--line)] last:border-0">
                      <td className="px-5 py-3 break-all">{row.email}</td>
                      <td className="px-5 py-3 whitespace-nowrap text-[var(--text-soft)]">
                        {dateFormat.format(new Date(row.created_at))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="px-5 py-10 text-center text-[16px] text-[var(--text-soft)]">
                아직 신청자가 없어요.
              </p>
            )}
          </div>
        </>
      )}
    </main>
  );
}
