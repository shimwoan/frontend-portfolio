interface DetailedProject {
  name: string;
  period: string;
  role: string;
  details: string[];
}

interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  period: string;
  techs: string[];
  highlights: string[];
  projects: string[];
  detailedProjects?: DetailedProject[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "아젠다북",
    role: "프론트엔드 엔지니어",
    type: "Agenda Bank Cloud — 데이터 분석 SaaS 플랫폼",
    period: "2024.06 ~ 현재",
    techs: ["React", "TypeScript", "React Query", "Recharts", "Playwright", "Sentry"],
    highlights: [
      "교차분석·상관분석·응답자 특성 분석 등 복합 통계 뷰 설계 — 분석 변수 간 의존성을 반영한 동적 차트 렌더링 파이프라인과 대량 데이터셋 가상화 처리",
      "GPT 기반 자동 분석 요청(AIR) 비동기 파이프라인 설계 — Long Polling + 상태 머신으로 분석 진행률 추적, AI 결과 기반 비주얼 슬라이드 자동 생성 엔진 구현",
      "분석 결과 PDF 변환 아키텍처 설계 — 차트·테이블·텍스트의 동적 페이지 분할 및 레이아웃 최적화",
      "Nx → 자체 빌드 파이프라인 마이그레이션 — 불필요한 의존성 제거 및 CI/CD 최적화로 빌드 시간 단축",
      "i18n 아키텍처 설계 — RTL(아랍어) 레이아웃 대응 포함 6개 언어 동적 전환, 번역 키 자동 추출 파이프라인 구축",
      "Playwright E2E 테스트 전략 수립 및 CI 연동",
    ],
    projects: [],
  },
  {
    company: "메디게이트",
    role: "프론트엔드 엔지니어 · 기술 리드",
    type: "국내 최고의 의사전문 온라인 플랫폼 서비스",
    period: "2023.02 ~ 2024.05",
    techs: [
      "React",
      "Next.js",
      "React Query",
      "Redux",
      "Zustand",
      "Turborepo",
      "Chakra UI",
      "Storybook",
      "Tailwind",
      "Java",
      "Spring Boot",
      "JPA",
    ],
    highlights: [
      "레거시 모놀리식 → 마이크로 프론트엔드 마이그레이션 설계 및 실행 — Module Federation 기반 런타임 통합으로 FCP 60% 개선 및 TBT 최적화",
      "FSD 아키텍처 도입 후 과도한 추상화로 인한 생산성 저하를 정량 분석하여 팀 컨벤션에 맞는 레이어 구조로 재설계 — 서비스 종료 시 유저 이탈 방지를 위한 Graceful Transition 처리",
      "Turborepo 기반 모노레포 환경 설계 — 서비스 간 공유 패키지 분리, 빌드 캐시 전략 수립으로 CI 파이프라인 최적화",
      "Headless UI 패턴 기반 디자인 시스템 아키텍처 설계 — Storybook 문서화 및 Chromatic 비주얼 리그레션 테스트 도입",
      "상태 관리 아키텍처 재설계 — Redux 의존성 제거 후 React Query(서버 상태) + Zustand(클라이언트 상태) 분리 패턴 적용",
      "계층별 Error Boundary 전략 설계 — Route/Feature/Component 레벨 격리로 부분 장애 시에도 서비스 연속성 보장",
      "CSS transform GPU 가속 + rAF 기반 Pull To Refresh 커스텀 구현 — 디바이스별 터치 이벤트 정규화로 60fps 네이티브 수준 조작감 달성",
      "URL Search Params 기반 선언적 UI 상태 관리 모듈 설계 — 진입 경로별 화면 분기, 딥링크 복원, 브라우저 히스토리 동기화",
      "A/B 테스트 인프라 구축 및 유저 행동 데이터 기반 의사결정 — Winning 안 적용으로 핵심 지표 개선",
      "Recharts 기반 개원입지 유료 리포트 — 복합 데이터 시각화 및 인터랙티브 필터링 시스템 설계",
    ],
    projects: [
      "메디게이트 모바일 구축 (2023.3 ~ 2023.4)",
      "메디게이트 모바일 프론트엔드 리팩토링 (2023.5)",
      "메디게이트 뉴스 모바일 리뉴얼 (2023.6 ~ 2023.7)",
      "메디게이트 개원입지 구축 PC + Mobile (2023.8 ~ 2024.3)",
    ],
  },
  {
    company: "(주) 코드명인",
    role: "프론트엔드 엔지니어",
    type: "관공서 및 대기업 대상 웹 서비스 구축 에이전시",
    period: "2021.02 ~ 2023.02",
    techs: [
      "React",
      "Next.js",
      "Redux",
      "SWR",
      "React Query",
      "Chakra UI",
      "Storybook",
      "Webpack",
      "jQuery",
      "Tailwind",
      "Pug",
      "Nunjucks",
      "SCSS",
    ],
    highlights: [
      "웹와치 협업으로 WCAG 2.1 기반 접근성 인증마크 15회 이상 획득 — WAI-ARIA 패턴 설계, 스크린 리더 호환성 검증, 키보드 내비게이션 체계 구축",
      "200+ 페이지 규모 프로젝트에서 Gulp 빌드 파이프라인 + Nunjucks/Pug 템플릿 상속 구조 설계 — 공통 레이아웃·파셜 컴포넌트 체계로 페이지 생성 속도 3배 향상",
      "JSP/Thymeleaf 레거시를 React SPA로 점진적 마이그레이션 — Webpack 커스텀 Config로 기존 서버 템플릿과 React 번들 공존 아키텍처 설계",
      "Code Splitting + Tree Shaking + 이미지 최적화(WebP 변환, lazy load)로 초기 번들 500KB 이내 달성",
      "iOS 웹뷰 크로스 플랫폼 이슈 해결 — Safari WebKit 렌더링 차이, Safe Area 대응, 네이티브 브릿지 통신 디버깅",
      "SCSS Design Token 체계 + BEM 아키텍처 도입 — 멀티 사이트 테마 변수 관리 및 컴포넌트 스타일 격리 구조 설계",
    ],
    projects: [],
    detailedProjects: [
      {
        name: "한국방송광고진흥공사 홈페이지 전면 리뉴얼",
        period: "2021.03 ~ 2022.08",
        role: "풀스택 · 반응형",
        details: [
          "8개 하위 사이트(연수원, 광고통계시스템, 광고박물관 등) 공통 UI 프레임워크 설계 — 사이트별 테마 분기 아키텍처 구현",
          "500+ 페이지 규모 단독 프론트엔드 설계 — 컴포넌트 라이브러리 + 페이지 템플릿 자동화로 일관된 품질 유지",
          "WCAG 2.1 기준 접근성 인증마크 10회 획득 — 시맨틱 마크업, ARIA 라이브 리전, 포커스 트랩 등 체계적 적용",
        ],
      },
      {
        name: "한솔교육 스마트 독서 플라톤 · 리터러시 App 구축",
        period: "2021.06 ~ 2021.10",
        role: "React 프론트엔드",
        details: [
          "4개 서비스(플라톤 APP, 리터러시 APP, RCMS, 어드민) 공통 컴포넌트 레이어 설계 — 서비스 간 UI 일관성 유지하면서 독립 배포 가능한 구조",
          "iOS 웹뷰 네이티브 브릿지 통신 설계 — JS↔Swift 양방향 메시지 프로토콜 구현 및 WebKit 렌더링 이슈 디버깅",
        ],
      },
      {
        name: "적십자병원 8개 지역 및 장례식장 홈페이지 리뉴얼",
        period: "2022.11 ~ 2023.02",
        role: "풀스택",
        details: [
          "8개 지역 사이트 공통 디자인 토큰 시스템 설계 — CSS Custom Properties 기반 테마 변수로 지역별 브랜딩 분기 처리",
          "멀티 사이트 템플릿 아키텍처 구축 — 공통 레이아웃 상속 구조로 신규 사이트 추가 시 개발 비용 최소화",
        ],
      },
      {
        name: "기타 프로젝트",
        period: "2021 ~ 2023",
        role: "프론트엔드 · 풀스택",
        details: [
          "국립 암센터 의사교육 홈페이지 구축 — 프론트엔드 + 백엔드",
          "보험개발원 어드민 구축 — 프론트엔드",
          "lesson.gg 게임교육영상 플랫폼 서비스 구축 — 풀스택",
          "(주)멕아이씨에스 환자 및 장비 관리 어드민 구축 — 프론트엔드",
          "자사 plus++ 게임매칭 플랫폼 서비스 구축 — 프론트엔드",
          "새문안교회 역사박물관, 모레컴퍼니, 선진정공 홈페이지 구축 — 풀스택",
        ],
      },
    ],
  },
  {
    company: "프리랜서",
    role: "웹 서비스 구축",
    type: "",
    period: "2019.06 ~ 2021.02",
    techs: [],
    highlights: [
      "클라이언트 요구사항 분석부터 기획·디자인·개발·배포까지 1인 풀사이클 개발 경험 다수 축적",
      "퀵 서비스 플랫폼 — 실시간 배차 현황 대시보드 및 주문 관리 어드민 시스템 구축",
      "crewcrew.me 협업 플랫폼 — 팀 매칭·프로젝트 관리 기능 프론트엔드 개발",
      "동서대 평생교육원 LMS — 영상 플레이어 진도율 추적 및 수강 상태 관리 시스템 유지보수",
    ],
    projects: [],
  },
];

function getDuration(period: string): string {
  const match = period.match(
    /(\d{4})\.(\d{1,2})\s*~\s*(\d{4})\.(\d{1,2})/
  );
  if (!match) return "";
  const [, y1, m1, y2, m2] = match.map(Number);
  const months = (y2 - y1) * 12 + (m2 - m1);
  const years = Math.floor(months / 12);
  const remainMonths = months % 12;
  if (years > 0 && remainMonths > 0) return `${years}년 ${remainMonths}개월`;
  if (years > 0) return `${years}년`;
  return `${remainMonths}개월`;
}

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold">경력</h2>
          <span className="text-sm font-medium text-[var(--color-primary)] bg-blue-50 px-3 py-1 rounded-full">
            합 7년
          </span>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </div>

        <div className="space-y-0">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.company} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {idx < EXPERIENCES.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-px bg-[var(--color-border)]" />
              )}
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-[3px] border-[var(--color-primary)] bg-white" />

              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 md:p-8 hover:shadow-lg hover:shadow-gray-100/80 transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    {exp.type && (
                      <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">
                        {exp.type}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-sm text-[var(--color-text-tertiary)]">
                      {exp.period}
                    </span>
                    {getDuration(exp.period) && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-[var(--color-primary)] font-medium">
                        {getDuration(exp.period)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="inline-flex items-center px-3 py-1 rounded-lg bg-[var(--color-bg-secondary)] text-sm text-[var(--color-text-secondary)] font-medium mb-4">
                  {exp.role}
                </div>

                {exp.techs.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {exp.highlights.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] mb-2">
                      Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                        >
                          <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.projects.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] mb-2">
                      Projects
                    </h4>
                    <ul className="space-y-1">
                      {exp.projects.map((p, i) => (
                        <li
                          key={i}
                          className="text-sm text-[var(--color-text-secondary)] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-px before:bg-[var(--color-text-tertiary)]"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.detailedProjects && exp.detailedProjects.length > 0 && (
                  <div className="mt-5 space-y-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                      Key Projects
                    </h4>
                    {exp.detailedProjects.map((dp, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                          <h5 className="font-semibold text-sm text-[var(--color-text)]">
                            {dp.name}
                          </h5>
                          <span className="text-xs text-[var(--color-text-tertiary)] shrink-0">
                            {dp.period}
                          </span>
                        </div>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-[var(--color-primary)] mb-2">
                          {dp.role}
                        </span>
                        <ul className="space-y-1">
                          {dp.details.map((d, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                            >
                              <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-[var(--color-text-tertiary)]" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
