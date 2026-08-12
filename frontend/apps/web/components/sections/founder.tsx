export function Founder() {
  return (
    <div className="bg-black px-8 py-20 text-white md:px-16">
      <h2 className="mb-12 text-5xl font-bold md:text-6xl">The Founder's Desk</h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
        {/* Photo */}
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-800">
          <div className="flex h-full items-center justify-center text-neutral-500">
            Team photo
          </div>
        </div>

        {/* Bio + socials */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-end gap-4 text-sm text-neutral-400">
            <a href="#" className="hover:text-white">X</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>

          <p className="text-lg leading-relaxed text-neutral-200">
            Hi, <span className="font-semibold text-white underline">I'm Manu.</span> I've
            been building web applications for over 8 years. I've worked with
            startups, small businesses, and large enterprises to build and
            scale their web applications. People call me a "Full Stack"
            engineer but I prefer to call myself a problem solver :)
          </p>

          <p className="text-lg leading-relaxed text-neutral-200">
            I started Aceternity to help businesses build their web presence,
            providing unique web apps that stand out and scale well.
            <br />
            Also, I post relevant web development snippets and tips{" "}
            <a href="#" className="underline">on my twitter</a> and
            occasionally shitpost
          </p>

          {/* Endorsement chips */}
          <div className="mt-4 flex flex-wrap gap-4">
            {[
              { name: "Jason Ray, CEO", note: "Aceternity and Manu are Cracked Devs!" },
              { name: "Steve Wozniak, CTO", note: "Aceternity and Manu are Cracked..." },
            ].map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-xs"
              >
                <div className="h-8 w-8 shrink-0 rounded-full bg-neutral-700" />
                <div>
                  <p className="font-medium text-white">{p.name}</p>
                  <p className="text-neutral-400">{p.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}