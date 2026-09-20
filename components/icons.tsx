// 통일된 라인 아이콘 세트. 전부 currentColor 기반이라 시그니처 컬러로 자유롭게 채색한다.
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4.5" y="10.5" width="15" height="9.5" rx="3" />
      <path d="M7.5 10.5V7.75a4.5 4.5 0 0 1 9 0v2.75" />
    </svg>
  );
}

export function AppsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
    </svg>
  );
}

export function WatchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="7" width="10" height="10" rx="3" />
      <path d="M12 9.5V12l1.6 1.2" />
      <path d="M9 3.5h6M9 20.5h6" />
    </svg>
  );
}

export function DnaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3c0 5 10 5 10 9s-10 4-10 9" />
      <path d="M17 3c0 5-10 5-10 9s10 4 10 9" />
      <path d="M8 7h8M8 17h8M7.5 12h9" />
    </svg>
  );
}

export function SparkleOrbIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="13" r="6.5" />
      <path d="M18 5.5l.9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9-1.9-.9 1.9-.9.9-1.9Z" />
    </svg>
  );
}

export function HeartLinkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-7-4.2-9.3-8.4C1.4 8.6 3 5.5 6 5c2-.3 3.6.8 4.5 2.3" />
      <path d="M12 20s7-4.2 9.3-8.4C22.6 8.6 21 5.5 18 5c-2-.3-3.6.8-4.5 2.3" />
      <path d="M9.5 12.5h5" />
    </svg>
  );
}

export function NeighborhoodIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 11.5 9 7l4.5 4.5" />
      <path d="M6 10.5V18h6v-7.5" />
      <path d="M13.5 13.5 17 10l4 4" />
      <path d="M14.5 13v5h5.5v-5" />
    </svg>
  );
}

export function TagIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M11 4h6a2 2 0 0 1 2 2v6L10 21 3 14 11 4Z" />
      <circle cx="14.5" cy="8.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="5.5" width="16" height="14.5" rx="3" />
      <path d="M8 3.5v4M16 3.5v4M4 10h16" />
      <path d="M8.5 14.5h2M13.5 14.5h2" />
    </svg>
  );
}
