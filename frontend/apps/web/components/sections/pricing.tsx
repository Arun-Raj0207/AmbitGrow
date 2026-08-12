import { Button } from "@workspace/ui/components/button"
import { Briefcase, FileText, Handshake } from "lucide-react"

const features = [
  {
    icon: Briefcase,
    title: "Instant Onboarding",
    desc: "Skip Hiring Delays and Start seeing results faster than ever before with our expert team",
  },
  {
    icon: FileText,
    title: "High Impact, Low Overhead",
    desc: "Skip Hiring Delays and Start seeing results faster than ever before with our expert team",
  },
  {
    icon: Handshake,
    title: "Stress-Free Collaboration",
    desc: "Skip Hiring Delays and Start seeing results faster than ever before with our expert team",
  },
]

const plans = [
  {
    label: "Components",
    badge: "All slots booked for November.",
    title: "Tailored Website Components",
    subtitle: "for Fast Moving Brands",
    price: "$4,995",
    dark: false,
    reviewer: "Jason Ray, CEO",
    features: [
      "Custom Strategy & Wireframe",
      "Development in Framer or Webflow",
      "Smooth Animations & Interactions",
      "Unlimited Revisions",
      "High-Fidelity Design in Figma",
      "Conversion-Focused Copywriting",
      "Basic SEO & Performance Optimization",
      "Conversion-Focused Copywriting",
    ],
  },
  {
    label: "Website Pages",
    badge: "2 Spots Available",
    title: "Tailored Website Components",
    subtitle: "for Fast Moving Brands",
    price: "$6,995",
    dark: true,
    reviewer: "Steve Wozniak, CTO",
    features: [
      "Custom Strategy & Wireframe",
      "Development in Framer or Webflow",
      "Smooth Animations & Interactions",
      "Unlimited Revisions",
      "High-Fidelity Design in Figma",
      "Conversion-Focused Copywriting",
      "Basic SEO & Performance Optimization",
      "Conversion-Focused Copywriting",
    ],
  },
  {
    label: "Multi Pages",
    badge: "All slots booked for November.",
    title: "Tailored Multi Page Websites",
    subtitle: "for Best Conversion Rates",
    price: "$12,499",
    dark: false,
    reviewer: null,
    features: [
      "Custom Strategy & Wireframe",
      "Development in Framer or Webflow",
      "Conversion-Focused Copywriting",
      "Conversion-Focused Copywriting",
      "Unlimited Revisions",
      "Basic SEO & Performance Optimization",
      "High-Fidelity Design in Figma",
      "High-Fidelity Design in Figma",
      "Development in Framer or Webflow",
      "High-Fidelity Design in Figma",
      "Smooth Animations & Interactions",
      "Unlimited Revisions",
    ],
  },
]

export function Pricing() {
  return (
    <div className="bg-neutral-50 px-8 py-20 md:px-16">
      {/* Feature cards */}
      <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((f) => {
          const Icon = f.icon
          return (
            <div
              key={f.title}
              className="rounded-2xl bg-white p-8 text-center"
            >
              <Icon className="mx-auto mb-4 h-6 w-6 text-amber-500" />
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                {f.title}
              </h3>
              <p className="text-sm text-neutral-500">{f.desc}</p>
            </div>
          )
        })}
      </div>

      {/* Pricing header */}
      <div className="mb-10 flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl">
          Extensive Pricing Plans
        </h2>
        <p className="text-sm text-neutral-500">
          Doubts? Reach out to us at{" "}
          <a href="#" className="underline">contact@aceternity.com</a> or{" "}
          <a href="#" className="underline">chat with us</a>
        </p>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.label}
            className={`rounded-2xl p-8 ${
              plan.dark ? "bg-black text-white" : "bg-white text-neutral-900"
            }`}
          >
            <div className="mb-4 flex items-center gap-3">
              <span
                className={`font-medium ${plan.dark ? "text-white" : "text-neutral-900"}`}
              >
                {plan.label}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  plan.badge.includes("Available")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {plan.badge}
              </span>
            </div>

            <h3 className="mb-1 text-2xl font-bold">{plan.title}</h3>
            <p className={`mb-6 ${plan.dark ? "text-neutral-400" : "text-neutral-400"}`}>
              {plan.subtitle}
            </p>

            <p className="mb-4 text-4xl font-bold">
              {plan.price}
              <span className="text-base font-normal">/mo</span>
            </p>

            <div className="mb-8 flex items-center gap-3">
              <Button className="bg-amber-400 text-black hover:bg-amber-300">
                Select Plan
              </Button>
              {plan.reviewer && (
                <div
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs ${
                    plan.dark ? "border-neutral-700" : "border-neutral-200"
                  }`}
                >
                  <div className="h-6 w-6 rounded-full bg-neutral-300" />
                  <span>{plan.reviewer}</span>
                  <span>Aceternity and Manu are Cracked Devs!</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {plan.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      plan.dark ? "bg-neutral-500" : "bg-neutral-300"
                    }`}
                  />
                  <span className={plan.dark ? "text-neutral-300" : "text-neutral-600"}>
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}