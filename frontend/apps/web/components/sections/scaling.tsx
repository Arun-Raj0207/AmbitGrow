import { Button } from "@workspace/ui/components/button"

const teamPhotos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const filledIndexes = [3, 7, 9, 13] // positions with actual photos in the reference

const clientLogos = ["Microsoft", "Google", "Adobe", "Raycast"]
const techIcons = ["⚛️", "▲", "🔥", "📊", "✨", "⚡"]

export function Scaling() {
  return (
    <div className="bg-neutral-50 px-8 py-20 md:px-16">
      <h2 className="mb-10 text-4xl font-bold text-neutral-900 md:text-5xl">
        Scaling Successful Companies
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Team photo grid + CTA */}
        <div className="flex flex-col justify-between rounded-2xl bg-white p-6">
          <div className="grid grid-cols-4 gap-2">
            {teamPhotos.map((i) => (
              <div
                key={i}
                className={`aspect-square rounded-lg ${
                  filledIndexes.includes(i) ? "bg-neutral-300" : "bg-neutral-100"
                }`}
              />
            ))}
          </div>
          <div className="mt-8">
            <p className="mb-3 font-medium text-neutral-900">
              Get to know our dream team
            </p>
            <Button className="bg-amber-400 text-black hover:bg-amber-300">
              Chat with Alex
            </Button>
          </div>
        </div>

        {/* Stats + Logos + Quote column */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl bg-white p-8">
            <p className="mb-2 text-6xl font-bold text-neutral-900">100+</p>
            <p className="mb-6 text-neutral-500">Companies served</p>
            <p className="text-sm text-neutral-500">
              We design and build websites that drive results and help your
              business grow. No Calls. No BS. Just Results.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-6">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial + tech stack column */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-6">
            <p className="mb-2 text-xs font-bold tracking-wide text-neutral-500">
              CURSOR
            </p>
            <p className="mb-4 text-neutral-800">
              "Since adding the AI assistant to our store, our support load
              has dropped by nearly 60%. Customers now get instant answers
              about supplements, dosages."
            </p>
            <p className="text-sm font-medium text-neutral-900">
              — James Finley <span className="font-normal text-neutral-500">Founder, Primer</span>
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6">
            <p className="mb-4 font-medium text-neutral-900">Technologies we use</p>
            <div className="flex flex-wrap gap-3">
              {techIcons.map((icon, i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-50 text-lg"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}