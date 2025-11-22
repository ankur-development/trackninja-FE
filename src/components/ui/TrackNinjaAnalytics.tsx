import {
  RiCloudFill,
  RiCodeSSlashLine,
  RiCpuLine,
  RiDeviceLine,
  RiPaletteFill,
  RiRocketFill,
  RiShieldCheckLine,
  RiSpeedLine,
} from "@remixicon/react"
import { Divider } from "../Divider"
import AnalyticsIllustration from "./AnalyticsIllustration" // you can reuse or replace with a sleek dashboard mockup
import { StickerCard } from "./StickerCard"

export function TrackNinjaAnalytics() {
  return (
    <section
      aria-labelledby="studio-capabilities"
      id="studio-capabilities"
      className="relative mx-auto w-full max-w-6xl overflow-hidden"
    >
      <div>
        <h2 className="relative scroll-my-24 text-lg font-semibold tracking-tight text-violet-500">
          What We Deliver
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-violet-500" />
        </h2>
        <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Pixel-perfect products, shipped at startup speed
        </p>
      </div>

      {/* Keep your beautiful illustration or swap for a dark dashboard / code + UI mockup */}
      <div className="mt-12 *:pointer-events-none">
        <AnalyticsIllustration />
      </div>

      <Divider className="mt-0" />

      <div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-4 md:grid-rows-1">
        <StickerCard
          Icon={RiPaletteFill}
          title="Figma → Production Code"
          description="Your designs converted to clean, responsive, type-safe code zero deviations."
        />

        <StickerCard
          Icon={RiRocketFill}
          title="Lightning-Fast Delivery"
          description="From kickoff to live product in 4–10 weeks. No excuses, no delays."
        />

        <StickerCard
          Icon={RiDeviceLine}
          title="Web + Mobile Apps"
          description="React, Next.js, React Native fully integrated, one codebase where it makes sense."
        />

        <StickerCard
          Icon={RiCloudFill}
          title="Scalable Cloud Backends"
          description="AWS / Vercel / Supabase built for millions of users from day one."
        />

        <StickerCard
          Icon={RiCpuLine}
          title="Embedded & Edge Systems"
          description="Rust, C++, firmware when your product needs to run on bare metal."
        />

        <StickerCard
          Icon={RiSpeedLine}
          title="Blazing Performance"
          description="95+ Lighthouse, sub-second loads, optimized assets performance is non-negotiable."
        />

        <StickerCard
          Icon={RiCodeSSlashLine}
          title="Clean, Modern Codebase"
          description="TypeScript, Zod, tRPC, Tailwind future-proof and a joy to extend."
        />

        <StickerCard
          Icon={RiShieldCheckLine}
          title="Battle-Tested Security"
          description="SOC 2 ready, OWASP compliant, secrets management enterprise-grade from the start."
        />
      </div>
    </section>
  )
}
