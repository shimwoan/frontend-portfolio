const POSTS = [
  {
    title: "프론트엔드 아키텍처의 끝 - Micro frontend in Monorepo",
    url: "https://jaemuu.tistory.com/3",
    tag: "Architecture",
  },
  {
    title: "디자인 시스템을 빠르게 효율적으로 구축하기",
    url: "https://jaemuu.tistory.com/2",
    tag: "Design System",
  },
  {
    title: "대규모 프로젝트에서의 CSS 아키텍처 전략",
    url: "https://jaemuu.tistory.com/5",
    tag: "CSS Architecture",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold">Blog</h2>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {POSTS.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-white rounded-2xl border border-[var(--color-border)] hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all"
            >
              <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-50 text-[var(--color-primary)] mb-4">
                {post.tag}
              </span>
              <h3 className="font-semibold leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                {post.title}
              </h3>
              <div className="mt-4 flex items-center gap-1 text-sm text-[var(--color-text-tertiary)] group-hover:text-[var(--color-primary)] transition-colors">
                Read more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
