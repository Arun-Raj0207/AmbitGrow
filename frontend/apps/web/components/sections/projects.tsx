export function Projects() {
  return (
    <div className="relative overflow-hidden bg-neutral-50 px-8 py-24 md:px-16">
      {/* Giant faded background word */}
      <span className="pointer-events-none absolute -top-4 left-8 select-none text-[10rem] font-bold text-neutral-200 md:text-[14rem]">
        Projects
      </span>

      <div className="relative z-10 grid grid-cols-1 gap-6 pt-24 md:grid-cols-2">
        {/* Tablet mockup card */}
        <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-neutral-200 p-10">
          <div className="w-full max-w-md rounded-xl border-8 border-neutral-900 bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between text-xs text-neutral-400">
              <span>BY WANNATHIS.ONE</span>
              <span>≡</span>
            </div>
            <div className="flex justify-center py-8">
              <div className="h-24 w-24 rounded-full bg-neutral-800" />
            </div>
            <div className="mt-6 flex items-center justify-between text-xs">
              <span className="rounded-full border px-3 py-1">PS</span>
              <span className="rounded-full bg-black px-3 py-1 text-white">Explore more</span>
              <span className="rounded-full border px-3 py-1">FIGMA</span>
            </div>
          </div>
        </div>

        {/* Phone mockup - dark card */}
        <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-black">
          <div className="flex h-72 w-40 flex-col items-center justify-center rounded-3xl border-4 border-neutral-700 bg-neutral-950 text-white">
            <span className="mb-6 text-lg">11:47</span>
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-2xl font-bold text-black">
              H
            </div>
            <span className="text-sm text-neutral-300">HPA</span>
          </div>
        </div>

        {/* Small card - teal */}
        <div className="flex aspect-[4/3] items-center rounded-2xl bg-teal-800 p-8 text-white">
          <div>
            <p className="mb-2 text-xs text-neutral-300">3/4 Workspace</p>
            <p className="text-lg font-medium">Join your company on Acme!</p>
            <p className="mt-1 text-xs text-neutral-300">
              These workspaces allow anyone from @onecol.co to join
            </p>
          </div>
        </div>

        {/* Small card - warm gradient */}
        <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-amber-700 via-orange-800 to-red-900 p-8 text-white">
          <p className="text-2xl font-medium">Data</p>
        </div>
      </div>
    </div>
  )
}