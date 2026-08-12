import {
  Gem,
  Cpu,
  Share2,
  Box,
  MessageCircle,
  Send,
  Handshake,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react"

const rows = [
  {
    icon: Gem,
    label: "Approach",
    good: "Design and engineering in sync",
    bad: "Disconnected teams",
  },
  {
    icon: Cpu,
    label: "Process",
    good: "Streamlined, transparent, and async",
    bad: "Endless calls, vague timelines",
  },
  {
    icon: Share2,
    label: "Design Philosophy",
    good: "Modern, minimal, and purposeful.",
    bad: "Trend-based and cluttered",
  },
  {
    icon: Box,
    label: "Development Stack",
    good: "Built with modern frameworks",
    bad: "Outdated stacks",
  },
  {
    icon: MessageCircle,
    label: "Communication",
    good: "Clear updates",
    bad: "Multiple middlemen",
  },
  {
    icon: Send,
    label: "Deliverables",
    good: "Production-ready design systems",
    bad: "Static mockups",
  },
  {
    icon: Handshake,
    label: "Support",
    good: "Long-term partnership mindset",
    bad: "One-and-done projects",
  },
]

export function Comparison() {
  return (
    <div className="bg-neutral-50 px-8 py-20 md:px-16">
      <h2 className="mb-10 text-4xl font-bold text-neutral-900 md:text-5xl">
        Aceternity VS Traditional Service Providers
      </h2>

      <div className="overflow-hidden rounded-2xl bg-white">
        {/* Header row */}
        <div className="grid grid-cols-[1fr_1.5fr_1.5fr] items-center border-b border-neutral-100 bg-neutral-50 px-8 py-5">
          <span />
          <span className="flex items-center gap-2 font-semibold text-neutral-900">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-black text-xs font-bold text-white">
              A
            </span>
            Aceternity Labs
          </span>
          <span className="text-neutral-400">Traditional Service Providers</span>
        </div>

        {/* Data rows */}
        {rows.map((row) => {
          const Icon = row.icon
          return (
            <div
              key={row.label}
              className="grid grid-cols-[1fr_1.5fr_1.5fr] items-center border-b border-neutral-100 px-8 py-6 last:border-0"
            >
              <div className="flex items-center gap-2 text-neutral-700">
                <Icon className="h-4 w-4" />
                <span className="font-medium">{row.label}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-800">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                {row.good}
              </div>
              <div className="flex items-center gap-2 text-neutral-500">
                <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400" />
                {row.bad}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}