const sections = [
  {
    kicker: "Players",
    headline: "Who's building Canada's AI future",
    context:
      "From Toronto's deep-learning pioneers to Montreal's responsible-AI labs, the ecosystem is maturing fast.",
    moves: [
      "Cohere raises US $500 M Series D at $5.5 B valuation (Apr 2026)",
      "Element AI alumni launch three new startups in Quebec (Mar 2026)",
      "BlackBerry IVY expands autonomous-vehicle AI partnerships (Apr 2026)",
    ],
    quote: {
      text: "Canada has the talent density to rival any AI corridor in the world.",
      attribution: "Jordan Jacobs, co-founder of Layer 6 AI (paraphrase)",
    },
  },
  {
    kicker: "Capital",
    headline: "Follow the money into Canadian AI",
    context:
      "Venture funding into Canadian AI startups surged 38% year-over-year in Q1 2026, led by late-stage mega-rounds.",
    moves: [
      "BDC Capital commits $200 M to AI-focused fund-of-funds (Mar 2026)",
      "Ontario Teachers' Pension Plan launches dedicated AI ventures arm (Apr 2026)",
      "OMERS Ventures leads $80 M round in Toronto health-AI startup (May 2026)",
    ],
    quote: {
      text: "The Canadian capital stack for AI is finally catching up to the talent stack.",
      attribution: "Salim Teja, MaRS Discovery District (paraphrase)",
    },
  },
  {
    kicker: "Talent",
    headline: "The people powering the AI wave",
    context:
      "Universities, immigration pathways, and corporate labs are all competing for Canada's most valuable export: AI researchers.",
    moves: [
      "U of T launches accelerated MSc in Applied AI, 200 seats (Apr 2026)",
      "Mila reports 1,200+ active researchers across 5 university partners (Mar 2026)",
      "Canada's Global Talent Stream processes 4,000 AI-role work permits in Q1 (May 2026)",
    ],
    quote: {
      text: "We train world-class researchers — the challenge is keeping them.",
      attribution: "Doina Precup, McGill / DeepMind Montreal (paraphrase)",
    },
  },
  {
    kicker: "Policy",
    headline: "Regulation meets innovation",
    context:
      "Bill C-27 (AIDA) continues its slow march through Parliament while provinces experiment with their own guardrails.",
    moves: [
      "AIDA committee completes final witness hearings, vote expected Q3 2026 (Apr 2026)",
      "Quebec publishes provincial AI ethics framework for public procurement (Mar 2026)",
      "OSFI issues draft guidance on AI/ML model risk for financial institutions (May 2026)",
    ],
    quote: {
      text: "Good regulation should be a competitive advantage, not a handbrake.",
      attribution: "Yoshua Bengio, Mila (paraphrase)",
    },
  },
  {
    kicker: "Adoption",
    headline: "How Canadian enterprises are deploying AI",
    context:
      "Adoption is broadening beyond tech — mining, agriculture, and healthcare are now leading deployment sectors.",
    moves: [
      "Shopify integrates AI assistant across all merchant admin tools (Apr 2026)",
      "Telus Health deploys clinical-AI triage in 200 clinics nationally (Mar 2026)",
      "Teck Resources pilots autonomous haul trucks at Highland Valley (May 2026)",
    ],
    quote: {
      text: "The real AI story in Canada is happening in the field, not just the lab.",
      attribution: "Tomi Poutanen, co-founder of Layer 6 AI (paraphrase)",
    },
  },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      {/* Hero */}
      <div className="mb-16 text-center">
        <p className="text-xs font-medium tracking-widest uppercase text-brand-primary mb-3">
          Editorial Briefing
        </p>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-slate-900 mb-4">
          state of canadian AI
          <span className="text-brand-primary">.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          A living overview of Canada&rsquo;s AI ecosystem &mdash; players, capital,
          talent, policy, and adoption &mdash; curated by AgentisLab.
        </p>
      </div>

      {/* Section cards */}
      <div className="space-y-8">
        {sections.map((s) => (
          <article
            key={s.kicker}
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
            <p className="text-slate-600 leading-relaxed mb-5">{s.context}</p>

            {/* Recent moves */}
            <ul className="space-y-2 mb-6">
              {s.moves.map((m, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-primary shrink-0" />
                  {m}
                </li>
              ))}
            </ul>

            {/* Pull-quote */}
            <blockquote className="border-l-2 border-brand-primary/30 pl-4 italic text-slate-500 text-sm">
              &ldquo;{s.quote.text}&rdquo;
              <footer className="mt-1 not-italic text-xs text-slate-400">
                &mdash; {s.quote.attribution}
              </footer>
            </blockquote>
          </article>
        ))}
      </div>
    </div>
  );
}
