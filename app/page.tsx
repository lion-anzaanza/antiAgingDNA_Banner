import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PhoneMockup from "@/components/PhoneMockup";
import PhoneMockupCalendar from "@/components/PhoneMockupCalendar";
import Reveal from "@/components/Reveal";
import SectionGlow from "@/components/SectionGlow";
import WaitlistForm from "@/components/WaitlistForm";
import FaqItem from "@/components/FaqItem";
import {
  AppsIcon,
  WatchIcon,
  DnaIcon,
  SparkleOrbIcon,
  HeartLinkIcon,
  NeighborhoodIcon,
  LockIcon,
  TagIcon,
  CalendarIcon,
} from "@/components/icons";
import {
  cardClass,
  containerClass,
  heroContainerClass,
  eyebrowClass,
  displayTextClass,
  headingTextClass,
  bodyTextClass,
  iconBadgeStyle,
  iconHoverClass,
  accentCardStyle,
} from "@/lib/ui";

const PROBLEMS = [
  {
    Icon: AppsIcon,
    tint: "--accent-pink",
    title: "수면 앱, 운동 앱, 식단 앱… 따로따로",
    desc: "건강 관리를 하려고 앱을 몇 개나 받았는데, 서로 연결되지 않아서 결국 다 흐지부지됐어요.",
    resolve: "그래서 LifeDNA는 기기 없이 기록만으로 시작해요.",
  },
  {
    Icon: WatchIcon,
    tint: "--accent-periwinkle",
    title: "통합 플랫폼은 웨어러블이 있어야만",
    desc: "한 번에 볼 수 있는 앱이 있다고 해도, 스마트워치 같은 기기가 있어야만 쓸 수 있었어요.",
    resolve: "그래서 LifeDNA는 스마트폰 하나로 충분해요.",
  },
];

const CONCEPTS = [
  {
    Icon: DnaIcon,
    tint: "--accent-lilac",
    title: "나만의 웰니스 유전자",
    desc: "수면·활동·식사·기분 같은 신호를 모아 MBTI처럼 나의 유형을 만들어요. 기록이 늘수록 유전자 조직이 자라납니다.",
  },
  {
    Icon: SparkleOrbIcon,
    tint: "--accent-pink",
    title: "살아있는 컨디션 오브",
    desc: "오늘의 컨디션을 오브 하나로 시각화해요. 좋으면 푸른빛, 나빠지면 붉은빛으로 물들어요.",
  },
];

const STEPS = [
  {
    title: "초기 진단",
    desc: "온보딩 12문항으로 나의 기준선을 잡아요. 검증된 척도를 기반으로 해요.",
  },
  {
    title: "매일 일지",
    desc: "표준화된 항목을 60초 안에, 선택형 위주로 부담 없이 기록해요.",
  },
  {
    title: "종합 점수",
    desc: "기록을 근거 기준으로 환산해 오늘의 컨디션과 5영역 점수를 보여줘요.",
  },
  {
    title: "맞춤 개선책",
    desc: "오늘의 한 가지를 근거와 함께 제안하고, 실천을 추적해요.",
  },
];

const FAQS = [
  {
    Icon: WatchIcon,
    tint: "--accent-periwinkle",
    q: "웨어러블 기기가 꼭 있어야 하나요?",
    a: "아니요, 없어도 괜찮아요. LifeDNA는 스마트폰 하나로 기록하고 확인하도록 만들고 있어요. 스마트워치가 있으면 나중에 연동해서 더 정확하게 쓸 수 있지만, 시작하는 데는 전혀 필요하지 않아요.",
  },
  {
    Icon: TagIcon,
    tint: "--accent-pink",
    q: "사전예약도 결제가 필요한가요?",
    a: "아니요. 이메일 주소만 남기면 신청이 끝나요. 카드 등록이나 결제 없이 완전히 무료로 참여하실 수 있어요.",
  },
  {
    Icon: LockIcon,
    tint: "--accent-lilac",
    q: "이메일은 어디에, 어떻게 쓰이나요?",
    a: (
      <>
        출시 소식과 사전예약 안내를 보내드리는 용도로만 사용해요. 다른 목적으로 쓰지 않고, 원하시면 언제든
        삭제를 요청하실 수 있어요. 자세한 내용은{" "}
        <Link href="/privacy" className="font-bold underline underline-offset-2" style={{ color: "var(--accent-lilac)" }}>
          개인정보처리방침
        </Link>
        에서 확인하실 수 있어요.
      </>
    ),
  },
  {
    Icon: CalendarIcon,
    tint: "--accent-periwinkle",
    q: "언제쯤 만나볼 수 있나요?",
    a: "아직 정확한 날짜는 정하지 않았어요(Coming Soon). 대신 사전예약해주신 분들께 출시 소식을 가장 먼저, 딱 한 번만 이메일로 알려드릴게요.",
  },
];

const FEATURES = [
  {
    Icon: HeartLinkIcon,
    tint: "--accent-pink",
    tag: "LifeDNA Pair",
    title: "1:1 관리 — 친구·연인과 함께",
    desc: "내가 실천하면 상대에게 혜택이 가고, 상대가 실천하면 내 보상 조건이 채워지는 상호 보상 구조예요. 서로를 챙기는 게 곧 나를 챙기는 일이 돼요.",
    chips: ["1:1 점수 대결", "공동 루틴(식사·운동·수면)", "공동 목표·리포트·보상"],
  },
  {
    Icon: NeighborhoodIcon,
    tint: "--accent-periwinkle",
    tag: "동네 크루",
    title: "동네생활 · 동네 챌린지",
    desc: "우리 동네 사람들과 걷기·러닝 목표를 함께 채워요. '우리 동네'라는 소속감이 혼자 할 때보다 습관을 오래 지속시켜줘요.",
    chips: ["동네 공동 목표", "동네 러닝 모임", "크루장 출석·회원 관리"],
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero — 로드 시 한 번 순서대로 떠오르는 진입 애니메이션(스크롤과 무관) */}
        <section className="relative overflow-hidden">
          <div className={`relative grid items-start gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 ${heroContainerClass}`}>
            {/* 텍스트 */}
            <div className="text-center lg:text-left">
              <span
                className="animate-hero-enter inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[14px] font-bold tracking-wide text-[var(--text)]"
                style={{ background: "var(--card-alpha)", border: "1px solid var(--line)" }}
              >
                🔒 COMING SOON
              </span>
              <h1
                className={`animate-hero-enter mt-6 ${displayTextClass}`}
                style={{ animationDelay: "90ms" }}
              >
                Life
                <span
                  className="animate-grad-shift bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--grad-main)" }}
                >
                  DNA
                </span>
              </h1>
              <p
                className="animate-hero-enter mt-5 text-[24px] font-semibold leading-snug text-[var(--text)] text-balance sm:text-[28px]"
                style={{ animationDelay: "180ms" }}
              >
                매일의 기록으로 나를 유전자처럼 읽어내는 웰니스 앱
              </p>
              <p
                className={`animate-hero-enter mx-auto mt-4 max-w-[42ch] text-[var(--text-soft)] lg:mx-0 ${bodyTextClass}`}
                style={{ animationDelay: "260ms" }}
              >
                웨어러블 디바이스 없이도, 수면·활동·기분을 기록하는 것만으로 나만의 웰니스 유전자가 자랍니다.
              </p>

              <div
                id="waitlist-form"
                className="animate-hero-enter mx-auto mt-10 max-w-[440px] scroll-mt-24 lg:mx-0"
                style={{ animationDelay: "340ms" }}
              >
                <WaitlistForm />
                <p className="mt-3 text-[14px] text-[var(--text-soft)]">
                  출시되면 가장 먼저 이메일로 알려드릴게요. 스팸 없이 딱 한 번만요.
                </p>
              </div>
            </div>

            {/* 앱 화면 미리보기 — 오브가 실제로 살아 움직이는 폰 목업 2개 */}
            <div
              className="animate-hero-enter flex justify-center pt-4 lg:justify-end lg:pt-0"
              style={{ animationDelay: "160ms" }}
            >
              <div className="relative">
                <PhoneMockupCalendar className="absolute -left-36 top-2 z-0 hidden sm:block" />
                <PhoneMockup className="relative z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Problem — 핑크 존 */}
        <section className="relative">
          <SectionGlow tint="--accent-pink" position="left" animate="animate-mesh-a" />
          <div className={`py-24 ${containerClass}`}>
            <Reveal>
              <p className={eyebrowClass}>Why LifeDNA</p>
              <h2 className={`mt-2 text-center ${headingTextClass}`}>이런 적, 있으신가요?</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {PROBLEMS.map((p, i) => (
                <Reveal key={p.title} from={i === 0 ? "left" : "right"}>
                  <div className={`${cardClass} group h-full p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]`}>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] ${iconHoverClass}`}
                      style={iconBadgeStyle(p.tint)}
                    >
                      <p.Icon width={24} height={24} />
                    </div>
                    <p className="mt-5 text-[20px] font-bold">{p.title}</p>
                    <p className={`mt-2 text-[var(--text-soft)] ${bodyTextClass}`}>{p.desc}</p>
                    <p className="mt-3 text-[16px] font-semibold" style={{ color: `var(${p.tint})` }}>
                      {p.resolve}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Concept — 라일락 존, 가로형 레이아웃으로 Problem 섹션과 구조를 다르게 */}
        <section className="relative">
          <SectionGlow tint="--accent-lilac" position="right" animate="animate-mesh-b" />
          <div className={`py-24 ${containerClass}`}>
            <Reveal from="scale">
              <p className={eyebrowClass}>Core Concept</p>
              <h2 className={`mt-2 text-center ${headingTextClass}`}>핵심 개념</h2>
              <p className={`mx-auto mt-3 max-w-[46ch] text-center text-[var(--text-soft)] ${bodyTextClass}`}>
                기록을 &lsquo;나를 알아가는 과정&rsquo;으로 바꿔, 스스로를 이해하고 조금씩 개선하게 만듭니다.
              </p>
            </Reveal>
            <div className="mt-10 flex flex-col gap-5">
              {CONCEPTS.map((c, i) => (
                <Reveal key={c.title} from={i === 0 ? "left" : "right"}>
                  <div
                    className={`${cardClass} group flex flex-col items-center gap-5 p-7 text-center transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)] sm:flex-row sm:text-left`}
                  >
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[var(--radius-md)] ${iconHoverClass}`}
                      style={iconBadgeStyle(c.tint)}
                    >
                      <c.Icon width={30} height={30} />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-bold">{c.title}</h3>
                      <p className={`mt-2 text-[var(--text-soft)] ${bodyTextClass}`}>{c.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works — 페리윙클 존, 4단계 순환 */}
        <section className="relative">
          <SectionGlow tint="--accent-periwinkle" position="right" animate="animate-mesh-c" />
          <div className={`py-24 ${containerClass}`}>
            <Reveal>
              <p className={eyebrowClass}>How It Works</p>
              <h2 className={`mt-2 text-center ${headingTextClass}`}>이용 방법</h2>
              <p className={`mx-auto mt-3 max-w-[46ch] text-center text-[var(--text-soft)] ${bodyTextClass}`}>
                진단으로 시작해서, 매일 기록하고, 점수로 확인하고, 개선책을 실천하는 순환이에요.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <Reveal key={s.title} className={i % 2 === 1 ? "delay-100" : ""}>
                  <div className={`${cardClass} group h-full p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]`}>
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-extrabold text-white transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "var(--grad-main)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-[17px] font-bold">{s.title}</h3>
                    <p className={`mt-1.5 text-[var(--text-soft)] ${bodyTextClass}`}>{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features — 핑크 존, 틴트 배경으로 톤을 확실히 다르게 */}
        <section className="relative">
          <SectionGlow tint="--accent-pink" position="left" animate="animate-mesh-a" />
          <div className={`py-24 ${containerClass}`}>
            <Reveal>
              <p className={eyebrowClass}>Together</p>
              <h2 className={`mt-2 text-center ${headingTextClass}`}>혼자보다, 함께</h2>
              <p className={`mx-auto mt-3 max-w-[46ch] text-center text-[var(--text-soft)] ${bodyTextClass}`}>
                LifeDNA는 나 혼자만의 기록에서 끝나지 않아요. 곁에 있는 사람들과 함께할 때 더 오래갑니다.
              </p>
            </Reveal>
            <div className="mt-10 flex flex-col gap-5">
              {FEATURES.map((f, i) => (
                <Reveal key={f.tag} from={i === 0 ? "left" : "right"}>
                  <div
                    className="group rounded-[var(--radius-lg)] p-8 shadow-[inset_0_1px_0_var(--highlight-top),var(--shadow-soft)] backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]"
                    style={accentCardStyle(f.tint)}
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-md)] ${iconHoverClass}`}
                        style={iconBadgeStyle(f.tint)}
                      >
                        <f.Icon width={26} height={26} />
                      </div>
                      <div>
                        <span
                          className="text-[14px] font-extrabold uppercase tracking-wider"
                          style={{ color: `var(${f.tint})` }}
                        >
                          {f.tag}
                        </span>
                        <h3 className="mt-1 text-[22px] font-bold">{f.title}</h3>
                      </div>
                    </div>
                    <p className={`mt-4 text-[var(--text-soft)] ${bodyTextClass}`}>{f.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {f.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full px-3 py-1.5 text-[14px] font-bold text-[var(--text)]"
                          style={{ background: "var(--card)", border: "1px solid var(--line)" }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — 라일락 존, 아코디언 */}
        <section className="relative">
          <SectionGlow tint="--accent-lilac" position="right" animate="animate-mesh-b" />
          <div className={`py-24 ${containerClass}`}>
            <Reveal>
              <p className={eyebrowClass}>FAQ</p>
              <h2 className={`mt-2 text-center ${headingTextClass}`}>자주 묻는 질문</h2>
              <p className={`mx-auto mt-3 max-w-[46ch] text-center text-[var(--text-soft)] ${bodyTextClass}`}>
                사전예약 전에 궁금하실 만한 것들을 미리 정리해봤어요.
              </p>
            </Reveal>
            <div className="mx-auto mt-10 flex max-w-[680px] flex-col gap-4">
              {FAQS.map((f, i) => (
                <Reveal key={f.q} className={i % 2 === 1 ? "delay-100" : ""}>
                  <FaqItem icon={<f.Icon width={20} height={20} />} tint={f.tint} q={f.q} a={f.a} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA — 클로징 스포트라이트 카드 */}
        <section className="relative py-16">
          <div className={containerClass}>
            <Reveal from="scale">
              <div
                className="relative overflow-hidden rounded-[var(--radius-lg)] px-6 py-16 text-center shadow-[var(--shadow-glow)] sm:px-12"
                style={{ background: "var(--grad-main)" }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,.4) 0%, rgba(255,255,255,0) 55%)",
                  }}
                />
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="LifeDNA 로고"
                    width={200}
                    height={202}
                    className="animate-float mx-auto h-auto w-[64px] drop-shadow-lg"
                  />
                  <h2 className={`mt-5 text-white ${headingTextClass}`}>
                    가장 먼저 만나보고 싶다면?
                  </h2>
                  <p className={`mx-auto mt-3 max-w-[46ch] text-white/90 ${bodyTextClass}`}>
                    사전예약하시면 출시 소식을 이메일로 가장 먼저 보내드려요.
                  </p>
                  <div className="mx-auto mt-8 max-w-[440px]">
                    <WaitlistForm />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="py-10">
          <Reveal>
            <div className={`flex flex-col items-center gap-3 text-center text-[14px] text-[var(--text-soft)] ${containerClass}`}>
              <Image
                src="/logo.png"
                alt="LifeDNA 로고"
                width={64}
                height={65}
                className="h-auto w-8 transition-transform duration-300 hover:scale-110"
              />
              <p>LifeDNA · 개인 웰니스 셀프 트래킹 앱</p>
              <Link
                href="/privacy"
                className="font-semibold underline underline-offset-2 transition-colors duration-200 hover:text-[var(--accent-pink)]"
                style={{ color: "var(--accent-lilac)" }}
              >
                개인정보처리방침
              </Link>
            </div>
          </Reveal>
        </footer>
      </main>
    </>
  );
}
