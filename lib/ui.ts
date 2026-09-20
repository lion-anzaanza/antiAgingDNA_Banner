// 공통 UI 클래스 — 디자인 토큰(app/tokens.css)만 참조한다.
// 버튼·카드·아이콘 배지 스타일은 항상 여기서 가져다 쓴다 (색상을 각 컴포넌트에 직접 적지 않는다).

// 본문 컨테이너 폭 — 전 섹션 공통 (히어로의 2단 그리드만 별도로 조금 더 넓게 쓴다)
export const containerClass = "mx-auto max-w-[840px] px-5";
export const heroContainerClass = "mx-auto max-w-[1040px] px-5";

// 카드: 반투명 화이트 글라스모피즘 + 상단 인셋 하이라이트 + soft shadow 1종
export const cardClass =
  "rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--card-alpha)] backdrop-blur-md " +
  "shadow-[inset_0_1px_0_var(--highlight-top),var(--shadow-soft)]";

export const buttonBaseClass =
  "inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-[var(--radius-sm)] px-6 py-3.5 " +
  "text-[16px] font-bold transition-all duration-200 ease-out " +
  "hover:-translate-y-0.5 active:translate-y-0 active:scale-95 " +
  "disabled:opacity-60 disabled:hover:translate-y-0 disabled:active:scale-100";

// 기본 CTA: 그라데이션 배경 + 흰 텍스트. glow=true면 은은한 컬러 글로우(넓은 공간용),
// glow=false면 작은 공간(헤더 등)에서 뭉개지지 않도록 가벼운 그림자만.
export function primaryButtonClass(glow: boolean = true) {
  return `${buttonBaseClass} group relative overflow-hidden text-[var(--text-on-accent)] hover:brightness-105 ${
    glow ? "shadow-[var(--shadow-glow)]" : "shadow-sm"
  }`;
}

// 보조 버튼: 반투명 화이트 + 플럼 텍스트
export const buttonSecondaryClass = `${buttonBaseClass} border border-[var(--line)] bg-white/55 text-[var(--text)] backdrop-blur-sm hover:bg-white/75`;

export const eyebrowClass =
  "text-center text-[14px] font-bold uppercase tracking-[0.2em] text-[var(--accent-lilac)]";

// 타이포그래피 템플릿 (딱 3종 — 프리텐다드 기준, 굵기·크기를 여기서만 정하고
// 화면 전체에서 이 3개만 재사용한다. 본문도 제목도 한 번 더 크게.)
// 1) Display — 히어로 메인 헤드라인 전용
export const displayTextClass =
  "text-[56px] sm:text-[76px] font-extrabold leading-[1.02] tracking-tight text-balance";
// 2) Heading — 섹션 제목(H2)과 카드 제목(H3) 공통
export const headingTextClass =
  "text-[30px] sm:text-[38px] font-bold leading-[1.15] tracking-tight text-balance";
// 3) Body — 본문·설명 문단 공통
export const bodyTextClass = "text-[18px] leading-[1.8]";

// 아이콘 배지: 카드 위에서 "카드 속 카드"처럼 보이지 않도록 불투명 흰 배경 대신
// 옅은 파스텔 틴트만 사용한다. tint는 accent 변수명(예: "--accent-pink")을 넘긴다.
export function iconBadgeStyle(tint: string) {
  return {
    background: `color-mix(in srgb, var(${tint}) 18%, transparent)`,
    color: `var(${tint})`,
  } as const;
}

// 시그니처 기능 카드: 은은한 틴트 배경으로 다른 카드들과 구분되게.
export function accentCardStyle(tint: string) {
  return {
    background: `color-mix(in srgb, var(${tint}) 8%, var(--card-alpha))`,
  } as const;
}

// 카드 안 아이콘 배지: 카드에 마우스를 올리면(group-hover) 살짝 커지며 기울어진다.
export const iconHoverClass = "transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3";
