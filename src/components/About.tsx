const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "아키텍처 설계",
    desc: "마이크로 프론트엔드, 모노레포, 디자인 시스템 등 서비스 규모에 맞는 아키텍처를 설계하고, 기술 부채를 정량 분석하여 점진적 개선 전략을 수립합니다.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "성능 최적화",
    desc: "Core Web Vitals, 번들 사이즈, 렌더링 파이프라인을 기반으로 병목을 진단하고, 정량적 지표 개선을 통해 사용자 경험과 비즈니스 지표를 동시에 끌어올립니다.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "기술 리딩",
    desc: "코드 리뷰, 컨벤션 수립, 기술 스택 의사결정을 주도하며, 멘토링을 통해 팀 전체의 엔지니어링 역량을 끌어올립니다.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "풀사이클 경험",
    desc: "프론트엔드를 중심으로 백엔드 API 설계, CI/CD 파이프라인, E2E 테스트 전략까지 서비스 전체 라이프사이클을 이해하고 주도적으로 의사결정합니다.",
  },
];

const HIGHLIGHTS: { value: string; label: string }[] = [];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold">About</h2>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </div>

        <div className="mb-12 p-6 md:p-8 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
          <h3 className="text-base font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-4">
            Career Highlights
          </h3>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            에이전시·SaaS·스타트업 등 다양한 도메인에서{" "}
            <strong className="text-[var(--color-text)]">50개 이상의 프로젝트를 설계·구축</strong>한 경험을 바탕으로,
            서비스 규모와 팀 상황에 맞는 기술 의사결정을 내립니다.
            공기업·관공서·대기업 대상 대규모 웹서비스부터 데이터 분석 SaaS, 모바일 플랫폼까지
            폭넓은 프로덕트 경험을 보유하고 있습니다.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            <strong className="text-[var(--color-text)]">마이크로 프론트엔드 마이그레이션</strong>,{" "}
            <strong className="text-[var(--color-text)]">모노레포 환경 설계</strong>,{" "}
            <strong className="text-[var(--color-text)]">디자인 시스템 구축</strong> 등
            프론트엔드 인프라를 주도적으로 설계해왔으며, 백엔드 API 설계와 CI/CD 파이프라인 경험을 통해
            프론트-백엔드 간 최적의 데이터 흐름과 배포 전략을 함께 설계합니다.
          </p>
          <div className="flex flex-wrap gap-6 md:gap-12">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label}>
                <div className="text-3xl font-bold text-[var(--color-primary)]">{h.value}</div>
                <div className="text-sm text-[var(--color-text-tertiary)] mt-1">{h.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group p-5 rounded-xl border border-[var(--color-border)] hover:border-blue-200 hover:bg-blue-50/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-50 text-[var(--color-primary)] flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{f.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
