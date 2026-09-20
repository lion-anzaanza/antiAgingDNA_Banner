// 목업의 "캘린더" 화면을 아주 간추린 두 번째 폰 미리보기.
// 홈 화면(오브 중심)과 다른 느낌을 주기 위해 히트맵 그리드 + 날짜 상세로 구성했다.
// PhoneMockup과 같은 비율(가로:세로)이 되도록 기준 폭 200px에서 세로를 406px로 고정했다.
const BASE_W = 200;
const BASE_H = 406;

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

// 0=빈칸, 1~4=점수 밴드(연함→진함), 9=오늘
const CELLS = [
  0, 0, 1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 4, 3, 2, 1, 2, 3, 4, 9, 3, 2, 1, 0,
];

const BAND_STYLE: Record<number, { bg: string; text: string }> = {
  1: { bg: "color-mix(in srgb, var(--accent-lilac) 30%, var(--card))", text: "var(--text-soft)" },
  2: { bg: "color-mix(in srgb, var(--accent-lilac) 55%, var(--card))", text: "var(--text)" },
  3: { bg: "color-mix(in srgb, var(--accent-pink) 65%, var(--accent-lilac))", text: "#fff" },
  4: { bg: "var(--grad-main)", text: "#fff" },
};

export default function PhoneMockupCalendar({ className = "" }: { className?: string }) {
  return (
    <div className={`h-[406px] w-[200px] lg:h-[386px] lg:w-[190px] ${className}`}>
      <div className="origin-top-left lg:scale-[0.95]" style={{ width: BASE_W }}>
        <div className="animate-float relative rotate-[-5deg]" style={{ animationDelay: "0.4s" }}>
          <div
            className="relative overflow-hidden rounded-[30px] bg-[var(--bg)]"
            style={{
              width: "100%",
              height: BASE_H,
              boxShadow: "0 24px 54px rgba(80,50,120,.32), 0 0 0 7px #2b2b30, 0 0 0 9px #47474d",
            }}
          >
            {/* 노치 */}
            <div className="absolute left-1/2 top-[9px] z-20 h-[13px] w-[62px] -translate-x-1/2 rounded-full bg-[#2b2b30]" />

            {/* 상태바 */}
            <div className="flex items-center justify-between px-4 pb-1 pt-3.5 text-[11px] font-bold text-[var(--text)]">
              <span>9:41</span>
              <span>●●●</span>
            </div>

            {/* 타이틀 */}
            <div className="mt-1 px-4">
              <p className="text-[15px] font-extrabold text-[var(--text)]">캘린더</p>
              <p className="mt-0.5 text-[11px] font-semibold text-[var(--text-soft)]">한 달의 컨디션 흐름</p>
            </div>

            {/* 월 네비게이션 */}
            <div className="mx-3 mt-3 flex items-center justify-between">
              <span className="text-[12px] text-[var(--text-soft)]">‹</span>
              <span className="text-[13.5px] font-extrabold text-[var(--text)]">2026년 7월</span>
              <span className="text-[12px] text-[var(--text-soft)]">›</span>
            </div>

            {/* 캘린더 그리드 */}
            <div
              className="mx-3 mt-2.5 rounded-[18px] p-2.5"
              style={{ background: "var(--card)", boxShadow: "var(--shadow-soft)" }}
            >
              <div className="grid grid-cols-7 gap-[4px]">
                {WEEKDAYS.map((w) => (
                  <span key={w} className="text-center text-[8.5px] font-bold text-[var(--text-soft)]">
                    {w}
                  </span>
                ))}
                {CELLS.map((c, i) => {
                  const band = BAND_STYLE[c];
                  const isToday = c === 9;
                  return (
                    <span
                      key={i}
                      className="flex aspect-square items-center justify-center rounded-[6px] text-[9px] font-extrabold"
                      style={{
                        background: c === 0 ? "transparent" : isToday ? "var(--grad-main)" : band?.bg,
                        color: c === 0 ? "transparent" : isToday ? "#fff" : band?.text,
                        outline: isToday ? "1.5px solid var(--accent-lilac)" : undefined,
                        outlineOffset: isToday ? "1px" : undefined,
                      }}
                    >
                      {c === 0 ? "" : (i % 27) + 1}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* 날짜 상세 — 캘린더 날짜를 탭했을 때 보이는 카드 */}
            <div
              className="mx-3 mt-3 rounded-[18px] p-3.5"
              style={{ background: "var(--card)", boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-extrabold text-[var(--text)]">7월 24일 (목)</span>
                <span
                  className="rounded-full px-2.5 py-1 text-[9.5px] font-bold text-white"
                  style={{ background: "var(--grad-main)" }}
                >
                  최고 컨디션
                </span>
              </div>
              <p className="mt-2 flex items-baseline gap-1">
                <span className="text-[25px] font-extrabold leading-none text-[var(--text)]">92</span>
                <span className="text-[11px] font-semibold text-[var(--text-soft)]">점</span>
              </p>
              <p className="mt-2 text-[10.5px] leading-snug text-[var(--text-soft)]">
                수면 7.5h · 운동 완료 · 카페인 절제 — 이번 달 최고 기록이에요
              </p>
            </div>

            <div
              className="mx-3 mt-3 rounded-[14px] px-3 py-2.5 text-center text-[11px] font-extrabold"
              style={{ background: "color-mix(in srgb, var(--accent-lilac) 16%, transparent)", color: "var(--accent-lilac)" }}
            >
              이번 달 22일 기록 · 평균 74점
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
