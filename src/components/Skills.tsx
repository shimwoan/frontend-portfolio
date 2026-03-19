const SKILL_GROUPS = [
  {
    category: "Frontend",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Zustand",
      "React Query",
    ],
  },
  {
    category: "Architecture & DX",
    skills: [
      "Micro Frontend",
      "Turborepo",
      "Webpack",
      "Module Federation",
      "Storybook",
      "Playwright",
    ],
  },
  {
    category: "Backend & Infra",
    skills: [
      "Node.js",
      "Supabase",
      "Expo",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </div>

        <div className="space-y-6">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-[var(--color-text)] border border-[var(--color-border)] hover:border-blue-300 hover:text-[var(--color-primary)] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
