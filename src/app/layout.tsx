import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "State of Canadian AI — AgentisLab",
  description:
    "A living editorial briefing on Canada's AI ecosystem: players, capital, talent, policy, and adoption.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-page-bg text-slate-900 font-sans antialiased"
        style={{ backgroundColor: "#fcfdfe" }}
      >
        {/* — Header (Mode A: standalone subdomain) — */}
        <header className="sticky top-0 z-50 bg-page-bg/80 backdrop-blur-xl border-b border-sky-100/40">
          <div className="max-w-3xl mx-auto flex items-center justify-between px-5 py-4">
            <a href="https://agentislab.ai" className="text-sm text-slate-500 hover:text-brand-primary transition-colors">
              &larr; agentislab.ai
            </a>
            <span className="font-display font-bold text-lg tracking-tight text-slate-900">
              agentis<span className="text-brand-primary">Lab.</span>
            </span>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        {/* — Footer — */}
        <footer className="border-t border-sky-100/40 mt-20">
          <div className="max-w-3xl mx-auto px-5 py-10 text-center text-sm text-slate-500">
            <p>
              Updated May 2026. By{" "}
              <a
                href="https://agentislab.ai"
                className="text-brand-primary hover:text-brand-secondary transition-colors"
              >
                AgentisLab
              </a>
              .
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
