"use client"

import { useState } from "react"
import { Button } from "@workspace/ui/components/button"

const testimonials = [
  {
    company: "CURSOR",
    quote:
      "Excellent communication and professionalism: open to ideas, humble when views differ. We'll re-engage; can't wait for the next job together.",
    name: "Henrik Söderlund",
    role: "CTO at Creme Digital",
  },
  {
    company: "KEARNEY",
    quote:
      "Quick to respond, very professional, and shipped a site within a week. Looking forward to the next collaboration.",
    name: "Asriel Han",
    role: "Founder / CTO at Advex AI",
  },
  {
    company: "Helium",
    quote:
      "The best front-end developer I've worked with. He took the requirements and ran with them.",
    name: "John Shahawy",
    role: "Founder at Moonbeam",
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <div className="bg-neutral-50 px-8 py-20 md:px-16">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl">
          See Insights straight from our users
        </h2>
        <Button className="hidden bg-amber-400 text-black hover:bg-amber-300 md:inline-flex">
          Chat with us
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 overflow-hidden md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.company}
            className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm"
          >
            <div>
              <div className="mb-6 flex items-start justify-between">
                <span className="text-lg font-bold tracking-wide text-neutral-800">
                  {t.company}
                </span>
                <span className="text-neutral-300">❝</span>
              </div>
              <p className="mb-6 text-neutral-700">{t.quote}</p>
            </div>
            <div>
              <p className="font-medium text-neutral-900">{t.name}</p>
              <p className="text-sm text-neutral-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="mt-8 flex justify-center gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-6 bg-black" : "w-2 bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}