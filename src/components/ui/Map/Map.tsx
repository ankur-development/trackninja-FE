import {
  RiCodeSSlashLine,
  RiDeviceLine,
  RiGlobeFill,
  RiRocketFill,
  RiServerFill,
  RiSignalTowerFill,
} from "@remixicon/react"
import { SVGMap } from "./SVGMap" // keep your world map component

export const Map = () => {
  return (
    <section
      id="deployments"
      aria-labelledby="deployments-title"
      className="relative flex w-full max-w-6xl scroll-my-24 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-950 px-10 shadow-2xl shadow-black/50 sm:px-16 md:px-28 lg:mx-auto"
    >
      {/* Diagonal side borders – unchanged */}
      <div className="absolute left-0 z-10 h-full backdrop-blur-[2px]">
        <svg
          className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
          style={{
            maskImage:
              "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
          }}
        >
          <defs>
            <pattern
              id="diagonal-border-pattern"
              patternUnits="userSpaceOnUse"
              width="64"
              height="64"
            >
              {Array.from({ length: 17 }, (_, i) => (
                <path
                  key={i}
                  d={`M${-106 + i * 8} 110L${22 + i * 8} -18`}
                  stroke=""
                  strokeWidth="1"
                />
              ))}
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#diagonal-border-pattern)"
          />
        </svg>
      </div>
      <div className="absolute right-0 z-10 h-full backdrop-blur-[2px]">
        <svg
          className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
          style={{
            maskImage:
              "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
          }}
        >
          <defs>
            <pattern
              id="diagonal-border-pattern"
              patternUnits="userSpaceOnUse"
              width="64"
              height="64"
            >
              {Array.from({ length: 17 }, (_, i) => (
                <path
                  key={i}
                  d={`M${-106 + i * 8} 110L${22 + i * 8} -18`}
                  stroke=""
                  strokeWidth="1"
                />
              ))}
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#diagonal-border-pattern)"
          />
        </svg>
      </div>

      {/* Heading */}
      <div className="pt-12 text-base font-semibold tracking-tight text-violet-400 sm:pt-20 sm:text-lg">
        Global Deployments
      </div>
      <h2
        id="deployments-title"
        className="mt-6 max-w-[700px] text-center text-2xl font-semibold tracking-tight text-balance text-white md:text-5xl"
      >
        We ship fast anywhere on the planet
      </h2>
      <p className="mt-4 max-w-2xl text-center text-base text-balance text-gray-400 sm:mt-8 sm:text-xl">
        Web apps, mobile apps, cloud infrastructure, and embedded firmware live
        in production for clients across continents, 24/7.
      </p>

      {/* World map with live markers */}
      <div className="relative mt-20 mb-10 ml-68 scale-90 sm:mb-16 md:mt-24 md:ml-0 md:scale-100">
        <SVGMap className="w-200 shrink-0" />

        {/* Europe – New web app launch */}
        <div className="absolute -top-3 left-[130px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15" />
            <div className="absolute -top-4 -right-[4.5rem] rounded-full bg-gray-950 px-2 py-0.5 text-xs text-white ring-1 ring-white/15">
              Just shipped
            </div>
            <RiRocketFill className="relative size-5 text-violet-400" />
            <div className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-violet-500/60" />
          </div>
        </div>

        {/* North America – Mobile app */}
        <div className="absolute top-[73px] left-[243px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15" />
            <div className="absolute -top-4 -right-[3.7rem] rounded-full bg-emerald-500 px-2 py-0.5 text-xs text-white ring-1 ring-emerald-400">
              Live
            </div>
            <RiDeviceLine className="relative size-5 text-white" />
          </div>
        </div>

        {/* Asia – Cloud backend */}
        <div className="absolute top-32 right-[300px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15" />
            <div className="absolute -top-4 -right-[4.2rem] rounded-full bg-gray-950 px-2 py-0.5 text-xs text-white ring-1 ring-white/15">
              Scaling
            </div>
            <RiServerFill className="relative size-5 text-white" />
            <div className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-violet-500/50" />
          </div>
        </div>

        {/* South America – Embedded system */}
        <div className="absolute top-20 right-[390px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15" />
            <RiCodeSSlashLine className="relative size-5 text-white" />
          </div>
        </div>

        {/* Australia – Figma → Code */}
        <div className="absolute top-12 right-[430px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15" />
            <div className="absolute -top-4 -right-7 rounded-full bg-gray-950 px-2 py-0.5 text-xs text-white ring-1 ring-white/15">
              Deployed
            </div>
            <RiGlobeFill className="relative size-5 text-white" />
          </div>
        </div>

        {/* Edge node / CDN */}
        <div className="absolute top-9 right-56">
          <div className="relative flex items-center justify-center">
            <RiSignalTowerFill className="z-10 size-5 text-violet-400" />
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15 backdrop-blur-sm" />
            <div className="absolute size-14 animate-[ping_3s_ease_infinite] rounded-full ring-1 ring-violet-500/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
