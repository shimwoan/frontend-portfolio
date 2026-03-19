export default function Education() {
  return (
    <section id="education" className="py-12">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold">교육</h2>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h4 className="font-semibold">대학교 중퇴</h4>
              <span className="text-sm text-[var(--color-text-tertiary)] shrink-0">
                2015
              </span>
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h4 className="font-semibold">대성고등학교 | 졸업</h4>
              <span className="text-sm text-[var(--color-text-tertiary)] shrink-0">
                2012
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
