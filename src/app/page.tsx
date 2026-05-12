import sectionsEn from "../content/sections.en.json";

type Move = { date: string; summary: string; source: string };
type Section = {
  kicker: string;
  headline: string;
  context: string;
  moves: Move[];
  pullQuote: string;
  quoteAttribution: string;
};

const sectionOrder: (keyof typeof sectionsEn)[] = [
  "players",
  "capital",
  "talent",
  "policy",
  "adoption",
];

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
  });
}

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      {/* Hero */}
      <div className="mb-16 text-center">
        <p className="text-xs font-medium tracking-widest uppercase text-brand-primary mb-3">
          Editorial Briefing &middot; Week of May 12, 2026
        </p>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-slate-900 mb-4">
          state of canadian AI
          <span className="text-brand-primary">.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          A living overview of Canada&rsquo;s AI ecosystem &mdash; players,
          capital, talent, policy, and adoption &mdash; curated by AgentisLab.
        </p>
      </div>

      {/* Section cards */}
      <div className="space-y-8">
        {sectionOrder.map((key) => {
          const s = sectionsEn[key] as Section;
          return (
            <article
              key={key}
              className="group rounded-2xl bg-sky-50/40 backdrop-blur-2xl border border-sky-100/40 shadow-xl p-8 transition-all duration-300 hover:shadow-[0_32px_64px_-12px_rgba(2,132,199,0.12)] hover:-translate-y-0.5"
            >
              {/* Kicker */}
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-primary mb-2">
                {s.kicker}
              </p>

              {/* Headline */}
              <h2 className="font-display font-bold text-2xl sm:text-[28px] leading-snug text-slate-900 mb-3">
                {s.headline}
              </h2>

              {/* Context */}
              <p className="text-slate-600 leading-relaxed mb-5">
                {s.context}
              </p>

              {/* Recent moves */}
              <ul className="space-y-4 mb-6">
                {s.moves.map((m, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 inline-flex items-center rounded-md bg-sky-100 px-2 py-0.5 text-[11px] font-medium text-brand-secondary tabular-nums">
                      {formatDate(m.date)}
                    </span>
                    <div className="text-sm text-slate-700 leading-relaxed">
                      {m.summary}
                      <a
                        href={m.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1.5 inline-flex items-center text-[11px] font-medium text-brand-primary hover:text-brand-secondary transition-colors"
                      >
                        Source&thinsp;&rarr;
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Pull-quote */}
              <blockquote className="border-l-2 border-brand-primary/30 pl-4 italic text-slate-500 text-sm">
                &ldquo;{s.pullQuote}&rdquo;
                <footer className="mt-1 not-italic text-xs text-slate-400">
                  &mdash; {s.quoteAttribution}
                </footer>
              </blockquote>
            </article>
          );
        })}
      </div>
    </div>
  );
}
