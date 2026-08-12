import { Button } from "@workspace/ui/components/button"

export function Services() {
  return (
    <div className="bg-neutral-50 px-8 py-20 md:px-16">
      <h2 className="mb-10 text-4xl font-bold text-neutral-900 md:text-5xl">
        Replace your Engineering Team
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
        {/* Large card - spans both rows */}
        <div className="flex flex-col justify-between overflow-hidden rounded-2xl bg-black md:row-span-2">
          <div className="flex flex-1 items-center justify-center bg-neutral-100 p-8">
            <div className="w-full max-w-xs rounded-lg border border-neutral-300 bg-white p-4 shadow-sm">
              <div className="mb-3 h-2 w-1/2 rounded bg-neutral-200" />
              <div className="mb-2 h-2 w-1/3 rounded bg-neutral-200" />
              <div className="h-24 rounded bg-neutral-100" />
            </div>
          </div>
          <div className="p-8 text-white">
            <h3 className="mb-2 text-xl font-semibold">Design and Development</h3>
            <p className="mb-4 text-sm text-neutral-400">
              Designed to perfection, Aceternity helps you take your dream
              idea to reality through our expert design and development
              services.
            </p>
            <Button className="bg-amber-400 text-black hover:bg-amber-300">
              View pricing
            </Button>
          </div>
        </div>

        {/* Regular updates */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <h3 className="mb-4 font-medium text-neutral-900">
            Regular updates and progress tracking
          </h3>
          <div className="mb-4 flex justify-center">
            <div className="h-24 w-24 rounded-full border-8 border-neutral-100 border-t-amber-300" />
          </div>
          <div className="rounded-lg border border-neutral-200 p-3 text-sm">
            <p className="mb-1 text-xs text-neutral-400">notification</p>
            <p className="font-medium">Revision Completed</p>
          </div>
        </div>

        {/* Hosting - dark card */}
        <div className="relative overflow-hidden rounded-2xl bg-black p-6 text-white">
          <h3 className="relative z-10 font-medium">
            Hosting, Deployment &amp; Maintenance
          </h3>
          <div className="relative z-10 mt-10 flex h-32 items-center justify-center opacity-70">
            <div className="h-1 w-full rounded bg-neutral-700" />
          </div>
        </div>

        {/* Get found on Google */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <h3 className="mb-4 font-medium text-neutral-900">Get found on Google</h3>
          <div className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-500">
            <span>🔍</span>
            Best GTM tools for business opera...
          </div>
        </div>

        {/* Components / dashboards */}
        <div className="relative overflow-hidden rounded-2xl bg-white p-6">
          <h3 className="font-medium text-neutral-900">
            Components, Dashboards and Everything else
          </h3>
          <div className="absolute bottom-4 right-4 h-16 w-16 rounded-xl bg-amber-400" />
        </div>
      </div>
    </div>
  )
}