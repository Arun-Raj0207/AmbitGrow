import { RuixenGradientFooter } from "@/components/ui/ruixen-gradient-footer"

const columns = [
  {
    title: "Services",
    links: ["Web Development", "UI/UX Design", "Branding", "SEO & Growth"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "FAQs", "Support"],
  },
  { title: "Company", links: ["About", "Work", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
]

export function Footer() {
  return (
    <RuixenGradientFooter gradientHeight="40vh" className="bg-background text-foreground">
      <div className="mx-auto w-full max-w-5xl px-6 pt-12">
        <div className="grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-foreground">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <path d="M12 2 22 12 12 22 2 12Z" fill="currentColor" />
                <path d="M12 8 16 12 12 16 8 12Z" className="fill-background" />
              </svg>
              <span className="font-mono text-sm uppercase tracking-widest">AmbitGrow</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              We design and build websites that drive results and help your business grow.
            </p>

            <div className="mt-6 flex max-w-xs gap-2">
              <input
                type="email"
                aria-label="Email address"
                placeholder="you@company.com"
                className="h-9 w-full rounded-md border border-border bg-transparent px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/40 focus:outline-none"
              />
              <button
                type="button"
                className="h-9 shrink-0 rounded-md bg-foreground px-3 font-mono text-xs uppercase tracking-wider text-background transition-opacity hover:opacity-90"
              >
                Join
              </button>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-10 font-mono text-xs uppercase tracking-wider sm:grid-cols-4 lg:col-span-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-foreground">{col.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 pb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground sm:flex-row">
          <span>© 2026 AmbitGrow</span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-primary" />
            All systems normal
          </span>
        </div>
      </div>
    </RuixenGradientFooter>
  )
}