export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="mailto:shimwoan@gmail.com"
            className="group flex items-center gap-4 p-5 rounded-2xl border border-[var(--color-border)] hover:border-blue-200 hover:bg-blue-50/30 transition-all"
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-[var(--color-primary)] flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">
                Email
              </div>
              <div className="font-medium group-hover:text-[var(--color-primary)] transition-colors">
                shimwoan@gmail.com
              </div>
            </div>
          </a>

          <a
            href="tel:010-9495-1182"
            className="group flex items-center gap-4 p-5 rounded-2xl border border-[var(--color-border)] hover:border-blue-200 hover:bg-blue-50/30 transition-all"
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-[var(--color-primary)] flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">
                Phone
              </div>
              <div className="font-medium group-hover:text-[var(--color-primary)] transition-colors">
                010-9495-1182
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
