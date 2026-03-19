const PROJECTS = [
  {
    title: "PETAROUND",
    description: "반려동물 종합 플랫폼 — 산책, 숙소예약, 사진 공유, 커뮤니티",
    period: "2024.05 ~ 2025.03",
    role: "프론트엔드 리딩 + 백엔드 사이드",
    techs: ["React Native", "Expo", "Zustand", "React Query", "Supabase"],
    highlights: [
      "MapView + 네이티브 위치 모듈 연동 실시간 경로 트래킹 — 백그라운드 위치 수집 배터리 최적화 및 경로 데이터 간소화 알고리즘 적용",
      "숙소예약 상태 머신 설계 — 예약/결제/취소/환불 플로우를 FSM(Finite State Machine)으로 모델링하여 엣지 케이스 방어",
      "Reanimated + Gesture Handler 기반 커스텀 인터랙션 시스템 — 바텀시트, 스와이프 카드, 핀치 줌 갤러리 등 네이티브 수준 60fps 제스처 구현",
      "FCM 기반 Push 아키텍처 설계 — 알림 유형별 딥링크 라우팅 전략 및 포그라운드/백그라운드 상태별 분기 처리",
      "이미지 파이프라인 최적화 — 클라이언트 리사이징 + WebP 변환 + Progressive Loading으로 체감 로딩 속도 40% 개선",
    ],
  },
  {
    title: "DevFlow",
    description: "개발자 생산성 대시보드 — GitHub 연동 코드 리뷰 분석 도구",
    period: "2024.01 ~ 2024.04",
    role: "1인 프론트엔드 개발",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "React Query", "Supabase", "Recharts"],
    highlights: [
      "GitHub REST API + GraphQL 하이브리드 데이터 페칭 전략 — Rate Limit 대응 큐잉 시스템 및 증분 동기화 설계",
      "Recharts 기반 커스텀 차트 엔진 — 히트맵·번다운·트리맵 등 5종 구현, 데이터 정규화 레이어 분리로 차트 간 데이터 소스 교체 가능한 구조",
      "Virtualized List + Intersection Observer 기반 1,000+ 아이템 렌더링 최적화 — 메모리 사용량 70% 절감",
      "Next.js App Router + Streaming SSR + Suspense 경계 설계로 FCP 1.2s 이내 달성",
    ],
  },
  {
    title: "SnapForm",
    description: "노코드 폼 빌더 — 드래그 앤 드롭 기반 설문 제작 도구",
    period: "2023.09 ~ 2023.12",
    role: "1인 풀스택 개발",
    techs: ["React", "TypeScript", "Zustand", "DnD Kit", "Supabase", "Framer Motion"],
    highlights: [
      "DnD Kit 기반 중첩 가능한 폼 빌더 엔진 — 재귀적 트리 구조 드래그 앤 드롭, 조건부 분기 로직 그래프 에디터 구현",
      "Zustand + Immer 기반 Command 패턴 상태 관리 — Undo/Redo 스택, 자동 저장(debounce), 버전 히스토리 diff 뷰어 구현",
      "WebSocket 기반 실시간 응답 집계 — 동시 접속자 간 데이터 충돌 방지를 위한 Optimistic UI + Conflict Resolution 전략 적용",
    ],
  },
  {
    title: "SCI 평판조회 서비스",
    description: "기업·개인 평판 데이터 조회, 분석 및 실시간 모니터링 플랫폼",
    period: "2023.06 ~ 2023.08",
    role: "React 프론트엔드",
    techs: ["React", "TypeScript", "React Query", "WebSocket", "Recharts"],
    highlights: [
      "복합 데이터 시각화 대시보드 — 라인/레이더/워드클라우드 차트 간 연동 필터링 및 드릴다운 인터랙션 설계",
      "Trie 자료구조 기반 검색 자동완성 엔진 — 퍼지 매칭 + 키보드 네비게이션으로 API 호출 70% 절감",
      "WebSocket 기반 실시간 채팅 아키텍처 — 메시지 가상 스크롤, 읽음 상태 동기화, 재연결 자동 복구 및 오프라인 메시지 큐잉",
      "Optimistic Update + React Query 캐시 정규화로 평판 리뷰 즉시 반영 — 서버 응답 실패 시 자동 롤백 처리",
    ],
  },
  {
    title: "TEE TEE",
    description: "IT 직군 과외 및 멘토링 매칭 플랫폼",
    period: "2023.03 ~ 2023.05",
    role: "React 프론트엔드",
    techs: ["React", "TypeScript", "Styled Components", "React Query"],
    highlights: [
      "다중 조건 필터링 엔진 — URL 기반 필터 상태 직렬화로 검색 결과 공유 및 브라우저 히스토리 연동",
      "커스텀 캘린더 스케줄링 컴포넌트 — Date-fns 기반 타임존 정규화, 드래그 기반 시간 범위 선택, 충돌 감지 알고리즘 적용",
      "Compound Component + Context 기반 Headless UI 시스템 설계 — 카드/모달/드롭다운의 동작 로직과 스타일 완전 분리",
    ],
  },
  {
    title: "세무법인 다솔",
    description: "세무·법률 서비스 홈페이지 및 고객 상담 시스템 구축",
    period: "2022.12 ~ 2023.02",
    role: "프론트엔드 개발",
    techs: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "세금 시뮬레이터 — 세목별 계산 로직을 순수 함수로 분리, 입력값 변경 시 의존 그래프 기반 선택적 재계산으로 복잡한 세무 규칙 실시간 반영",
      "다단계 폼 위자드 엔진 — Zod 스키마 기반 단계별 유효성 검증, 세무 유형에 따른 동적 필드 트리 렌더링",
      "문서 관리 대시보드 — File API + Web Worker 기반 클라이언트 사이드 PDF 파싱 및 썸네일 생성, 대용량 파일 청크 업로드",
      "GSAP ScrollTrigger + Framer Motion Layout Animation 조합으로 퍼포먼스 임계치 내 복합 인터랙션 구현",
      "Next.js ISR 기반 콘텐츠 페이지 — 구조화 데이터(JSON-LD) 자동 생성 및 Core Web Vitals 전 항목 Green 달성",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold">프로젝트</h2>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group p-6 bg-white rounded-2xl border border-[var(--color-border)] hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-lg font-bold group-hover:text-[var(--color-primary)] transition-colors">
                  {project.title}
                </h3>
                {project.period && (
                  <span className="text-xs text-[var(--color-text-tertiary)] shrink-0 mt-1">
                    {project.period}
                  </span>
                )}
              </div>
              {project.description && (
                <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                  {project.description}
                </p>
              )}
              <div className="inline-flex items-center px-3 py-1 rounded-lg bg-[var(--color-bg-secondary)] text-sm text-[var(--color-text-secondary)] font-medium">
                {project.role}
              </div>
              {project.techs.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-md bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {project.highlights.length > 0 && (
                <ul className="mt-3 space-y-1">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                    >
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
