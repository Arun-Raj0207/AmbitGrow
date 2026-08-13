import { Button } from "@workspace/ui/components/button"
import Image from "next/image"

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Faint grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Starfield / scattered dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(1.5px 1.5px at 20% 15%, white, transparent), " +
            "radial-gradient(1.5px 1.5px at 40% 8%, white, transparent), " +
            "radial-gradient(1px 1px at 60% 25%, white, transparent), " +
            "radial-gradient(1.5px 1.5px at 80% 12%, white, transparent), " +
            "radial-gradient(1px 1px at 10% 35%, white, transparent), " +
            "radial-gradient(1.5px 1.5px at 30% 45%, white, transparent), " +
            "radial-gradient(1px 1px at 50% 30%, white, transparent), " +
            "radial-gradient(1.5px 1.5px at 70% 40%, white, transparent), " +
            "radial-gradient(1px 1px at 90% 20%, white, transparent), " +
            "radial-gradient(1.5px 1.5px at 15% 55%, white, transparent), " +
            "radial-gradient(1px 1px at 85% 50%, white, transparent)",
        }}
      />

      {/* A couple faint outlined squares, like the reference */}
      <div className="pointer-events-none absolute left-[8%] top-[15%] h-16 w-16 rounded-md bg-white/[0.03]" />
      <div className="pointer-events-none absolute left-[32%] top-[27%] h-14 w-14 rounded-md bg-white/[0.03]" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.jpeg"
            alt="AmbitGrow logo"
            width={36}
            height={36}
            className="rounded-md"
          />
          <span className="text-sm font-semibold tracking-wide">AmbitGrow</span>
        </div>
        <div className="hidden gap-8 text-sm text-neutral-300 md:flex">
          <a href="#work" className="transition-colors hover:text-white">Work</a>
          <a href="#products" className="transition-colors hover:text-white">Products</a>
          <a href="#pricing" className="transition-colors hover:text-white">Pricing</a>
          <a href="#blog" className="transition-colors hover:text-white">Blog</a>
        </div>
        <Button className="bg-amber-400 text-black hover:bg-amber-300">
          Enquire Now
        </Button>
      </nav>

      {/* Brighter radial glow background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(245,158,11,0.35)_0%,_rgba(245,158,11,0.08)_45%,_transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-start px-8 pb-4 pt-10 md:px-16">
        <span className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/60 px-4 py-1.5 text-xs text-neutral-300">
          AmbitGrow <span className="text-neutral-500">|</span> Design &amp; Development
        </span>

        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <h1 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            The best design and development agency in the world.
          </h1>

          <div className="flex max-w-xs flex-col items-start gap-5 text-neutral-300">
            <p className="leading-relaxed">
              We design and build websites that drive results and help your
              business grow. No Calls. No BS. Just Results.
            </p>
            <Button className="bg-amber-400 text-black hover:bg-amber-300">
              Chat with us
            </Button>
          </div>
        </div>
      </div>

      {/* Giant wordmark with glow behind it */}
      <div className="pointer-events-none absolute -bottom-10 left-0 w-full select-none overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-amber-500/10 to-transparent" />
        <span className="relative block whitespace-nowrap text-[12rem] font-bold text-neutral-800/90 md:text-[16rem]">
          AmbitGrow
        </span>
      </div>
    </div>
  )
}