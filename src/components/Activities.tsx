export default function Activities() {
  return (
    <section id="activities" className="py-20">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold">대외 활동</h2>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h4 className="font-semibold">
                  구름톤 Univ 해커톤 — 프론트엔드 멘토
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                  해커톤 진행 과정에서 마주한 인증 오류 및 구현 어려움에 대해 멘토링 진행
                </p>
              </div>
              <span className="text-sm text-[var(--color-text-tertiary)] shrink-0">
                2024
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h4 className="font-semibold">
                  2024년 미래내일 일경험:ESG형 — 프론트엔드 멘토
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                  멘토 1명당 멘티 4명 담당 / 프로젝트 리딩, 코드 리뷰, 멘토링
                </p>
              </div>
              <span className="text-sm text-[var(--color-text-tertiary)] shrink-0">
                2024.06 ~ 2024.08
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
