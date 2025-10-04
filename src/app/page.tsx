export default function Home() {
  return (
    <div className="relative">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-400/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-400/25 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-lg">
            <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Bright</span>
            Start
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Contact</a>
            <a
              href="#contact"
              className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 transition"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1 text-xs text-foreground/70 backdrop-blur">
            New • Built with Next.js 15 and Tailwind CSS 4
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight">
            Build beautiful websites
            <span className="block bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">in minutes</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            BrightStart is a simple starter that helps you launch a clean, responsive landing page fast—no fuss, just great defaults.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-500 shadow-sm hover:opacity-95 transition"
            >
              Get BrightStart
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="opacity-90">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold border border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/5 text-foreground shadow-sm hover:bg-white/80 dark:hover:bg-white/10 transition"
            >
              See features
            </a>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Responsive by default",
                desc: "Looks great on phones, tablets, and desktops with zero extra work.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Accessible and semantic",
                desc: "Good defaults for a11y and clean, semantic markup.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Dark mode ready",
                desc: "Automatic dark theme with tasteful contrasts and opacity.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                ),
              },
              {
                title: "Fast by design",
                desc: "Next.js App Router, edge-ready, and optimized assets.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M13 3l-1 9h9l-9 9 1-9H4l9-9z" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                ),
              },
              {
                title: "TypeScript first",
                desc: "Strict TS config and helpful types out of the box.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 12h8M8 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Ready to deploy",
                desc: "One click to Vercel or bring your own hosting.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 3l9 18H3L12 3z" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-5 py-6 shadow-sm transition hover:shadow-md backdrop-blur"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 text-sky-600 dark:text-sky-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1 text-sm text-foreground/70">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 shadow-sm backdrop-blur">
              <h3 className="text-xl font-bold">Starter</h3>
              <p className="mt-1 text-sm text-foreground/70">Perfect for personal projects and quick launches.</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight">$0</span>
                <span className="text-sm text-foreground/60">/ forever</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon /> All core sections (Hero, Features, Pricing, Contact)
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Responsive, accessible, and dark-mode ready
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Deployable to Vercel in one click
                </li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex rounded-full bg-foreground text-background px-5 py-3 text-sm font-semibold hover:opacity-90 transition">Start for free</a>
            </div>
            <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 p-6 shadow-md">
              <h3 className="text-xl font-bold">Pro</h3>
              <p className="mt-1 text-sm text-foreground/70">For teams who want more polish and components.</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight">$19</span>
                <span className="text-sm text-foreground/60">/ month</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckIcon /> Everything in Starter</li>
                <li className="flex items-center gap-2"><CheckIcon /> Extra sections and components</li>
                <li className="flex items-center gap-2"><CheckIcon /> Priority support</li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-5 py-3 text-sm font-semibold hover:opacity-95 transition">Go Pro</a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 shadow-sm backdrop-blur text-center">
            <h3 className="text-2xl font-bold tracking-tight">Let’s build something great</h3>
            <p className="mt-2 text-sm text-foreground/70">Have questions or want to customize this starter for your brand?</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:hello@example.com?subject=BrightStart%20Inquiry"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold border border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/5 text-foreground shadow-sm hover:bg-white/80 dark:hover:bg-white/10 transition"
              >
                Email us
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold bg-foreground text-background shadow-sm hover:opacity-90 transition"
              >
                View docs
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between text-sm">
          <p className="text-foreground/60">© {new Date().getFullYear()} BrightStart. All rights reserved.</p>
          <div className="hidden sm:flex items-center gap-4">
            <a href="#features" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
