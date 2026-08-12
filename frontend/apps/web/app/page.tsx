import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Projects } from "@/components/sections/projects"
import { Testimonials } from "@/components/sections/testimonials"
import { Scaling } from "@/components/sections/scaling"
import { Comparison } from "@/components/sections/comparison"
import { Pricing } from "@/components/sections/pricing"
import { Founder } from "@/components/sections/founder"
import { Footer } from "@/components/sections/footer"

export default function age() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Scaling />
      <Comparison />
      <Pricing />
      <Founder />
      <Footer />
    </>
  )
}