"use client";

export default function Hero() {
  return (
    <>
      {/* Header: 직함 + 이름 + 이메일 */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28">
        {/* Mint gradient background blob */}
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full opacity-50 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #86efac 0%, #6ee7b7 30%, #a7f3d0 60%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-20 -right-10 w-[400px] h-[400px] rounded-full opacity-35 blur-2xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #34d399 0%, #6ee7b7 40%, transparent 70%)",
          }}
        />
        <div className="relative max-w-[1100px] mx-auto px-6 md:px-12">
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] font-medium mb-2">
            프론트엔드 개발자
          </p>
          <h1 className="text-4xl md:text-[52px] font-bold tracking-tight leading-tight mb-4">
            심재무
          </h1>
          <p className="text-base text-[var(--color-text-secondary)]">
            shimwoan@gmail.com
          </p>
        </div>
      </section>

      {/* 자기소개 섹션 */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12">
            <h2 className="text-base font-bold text-[var(--color-text)] shrink-0">
              자기소개
            </h2>
            <div>
              <p className="text-lg md:text-xl font-bold text-[var(--color-text)] leading-relaxed mb-6">
                &ldquo;구조적인 설계와 성능 최적화로 서비스 품질과 팀 생산성을 함께
                끌어올리는 프론트엔드 엔지니어&rdquo;
              </p>
              <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.8] mb-4">
                레거시 시스템의 React 점진적 마이그레이션, 마이크로 프론트엔드
                도입을 통한 FCP 60% 개선, Turborepo 기반 모노레포 환경 설계 등
                서비스 규모에 맞는 아키텍처를 주도적으로 설계하고 실행해왔습니다.
                공공기관·의료·데이터 분석 SaaS 등 다양한 도메인에서 50개 이상의
                프로젝트를 구축한 경험을 바탕으로, 비즈니스 요구사항과 기술적
                트레이드오프를 균형 있게 판단합니다.
              </p>
              <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.8]">
                디자인 시스템 구축, 빌드 파이프라인 최적화, E2E 테스트 전략 수립
                등 팀이 빠르게 움직일 수 있는 개발 인프라를 만드는 데 강점이
                있으며, 기술적 의사결정의 근거를 공유하고 팀의 엔지니어링 수준을
                함께 높여가는 것을 지향합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
