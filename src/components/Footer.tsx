export default function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--color-border)]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-text-tertiary)]">
            &copy; 2025 심재무. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:shimwoan@gmail.com"
              className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] transition-colors"
            >
              shimwoan@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
