import {
  RiCheckLine,
  RiCloudLine,
  RiCodeSSlashLine,
  RiCpuLine,
  RiDeviceLine,
  RiLayoutLine,
  RiPaletteLine,
  RiRocketLine,
  RiSmartphoneLine,
} from "@remixicon/react"
import { TrackNinjaMark } from "../../../public/TrackNinjaMark"
import { Orbit } from "../Orbit"
import ChipViz from "./ChipViz"

export default function Features() {
  return (
    <section
      aria-label="What We Build"
      id="solutions"
      className="relative mx-auto max-w-6xl scroll-my-24"
    >
      {/* Vertical dashed lines – unchanged */}
      <div className="pointer-events-none inset-0 select-none">
        <div className="absolute inset-y-0 left-0 -my-20 w-px">
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
        </div>
        <div className="absolute inset-y-0 right-0 -my-20 w-px">
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
        </div>
        <div className="absolute inset-y-0 left-1/2 -z-10 -my-20 w-px">
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
        </div>
        <div className="absolute inset-y-0 left-1/4 -z-10 -my-20 hidden w-px sm:block">
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
        </div>
        <div className="absolute inset-y-0 left-3/4 -z-10 -my-20 hidden w-px sm:block">
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>

      {/* Main grid – increased vertical gap for breathing room */}
      <div className="grid grid-cols-1 gap-20 md:grid-cols-4 md:gap-0">

        {/* 1. End-to-End Delivery – Text left */}
        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight text-violet-500">
            End-to-End Delivery
            <div className="absolute top-1 -left-2 h-5 w-[3px] rounded-r-sm bg-violet-500" />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
            From idea to production in weeks, not months
          </p>
          <p className="mt-4 text-balance text-gray-700">
            Web apps, mobile apps, cloud backends, embedded firmware we ship everything, perfectly integrated.
          </p>
        </div>
        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg className="absolute size-full">
            <defs>
              <pattern id="diagonal-feature-pattern" patternUnits="userSpaceOnUse" width="64" height="64">
                {Array.from({ length: 17 }, (_, i) => (
                  <path key={i} d={`M${-106 + i * 8} 110L${22 + i * 8} -18`} className="stroke-gray-200/70" strokeWidth="1" />
                ))}
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-feature-pattern)" />
          </svg>
          <div className="pointer-events-none h-104 p-10 select-none">
            <Orbit
              durationSeconds={40}
              radiusPx={140}
              keepUpright
              orbitingObjects={[
                <div key="web" className="relative flex items-center justify-center">
                  <RiLayoutLine className="z-10 size-5 text-gray-900" />
                  <div className="absolute size-10 rounded-full bg-white/50 shadow-lg ring-1 ring-black/5" />
                </div>,
                <div key="mobile" className="relative flex items-center justify-center">
                  <RiSmartphoneLine className="z-10 size-5 text-gray-900" />
                  <div className="absolute size-10 rounded-full bg-white/50 shadow-lg ring-1 ring-black/5" />
                </div>,
                <div key="cloud" className="relative flex items-center justify-center">
                  <RiCloudLine className="z-10 size-5 text-gray-900" />
                  <div className="absolute size-10 rounded-full bg-white/50 shadow-lg ring-1 ring-black/5" />
                  <div className="absolute -top-5 left-4">
                    <div className="flex gap-1">
                      <div className="flex items-center justify-center rounded-l-full bg-emerald-500 p-1 text-xs ring-1 ring-gray-200">
                        <RiCheckLine className="size-3 text-white" />
                      </div>
                      <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
                        Deployed
                      </div>
                    </div>
                  </div>
                </div>,
                <div key="embedded" className="relative flex items-center justify-center">
                  <RiCpuLine className="z-10 size-5 text-gray-900" />
                  <div className="absolute size-10 rounded-full bg-white/50 shadow-lg ring-1 ring-black/5" />
                </div>,
                <div key="design" className="relative flex items-center justify-center">
                  <RiPaletteLine className="z-10 size-5 text-gray-900" />
                  <div className="absolute size-10 rounded-full bg-white/50 shadow-lg ring-1 ring-black/5" />
                </div>,
              ]}
            >
              <div className="relative flex h-48 w-48 items-center justify-center">
                <div className="rounded-full p-1 ring-1 ring-black/10">
                  <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-white shadow-[inset_0px_-15px_20px_rgba(0,0,0,0.1),0_7px_10px_0_rgba(0,0,0,0.15)] ring-1 ring-black/20">
                    <TrackNinjaMark className="size-10" />
                  </div>
                  <div className="absolute inset-12 animate-[spin_8s_linear_infinite] rounded-full bg-linear-to-t from-transparent via-violet-400 to-transparent blur-lg" />
                </div>
              </div>
            </Orbit>
          </div>
        </div>

        {/* 2. Figma → Code → Live – INVERTED: Illustration left */}
        <div className="relative col-span-2 flex items-center justify-center overflow-hidden order-last md:order-none">
          <svg className="absolute size-full">
            <defs>
              <pattern id="diagonal-feature-pattern" patternUnits="userSpaceOnUse" width="64" height="64">
                {Array.from({ length: 17 }, (_, i) => (
                  <path key={i} d={`M${-106 + i * 8} 110L${22 + i * 8} -18`} className="stroke-gray-200/70" strokeWidth="1" />
                ))}
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-feature-pattern)" />
          </svg>
          <div className="relative h-[432px] w-[432px]">
            <svg id="grid" xmlns="http://www.w3.org/2000/svg" fill="none" className="absolute size-[432px]">
              <path className="stroke-gray-300" d="M48 0v432M96 0v432M144 0v432M192 0v432M240 0v432M288 0v432M336 0v432M384 0v432M0 48h432M0 96h432M0 144h432M0 192h432M0 240h432M0 288h432M0 336h432M0 384h432" />
            </svg>
            <div className="pointer-events-none relative h-full select-none">
              <div className="absolute top-48 left-[191.8px]">
                <div className="flex h-12 w-12 items-center justify-center bg-white shadow-sm ring-1 ring-black/15">
                  <TrackNinjaMark className="h-8 w-8" />
                </div>
              </div>
              {["Live", "Ready", "Built", "Shipped", "Done", "Fast"].map((_, i) => {
                const positions = [[144, 48], [48, 144], [96, 240], [240, 385], [337, 336], [288, 144]]
                const [top, left] = positions[i]
                return (
                  <div key={i} className="absolute" style={{ top: `${top}px`, left: `${left}px` }}>
                    <div className="relative">
                      <div className="absolute inset-0 size-12 animate-pulse bg-violet-200 blur-[3px]" />
                      <div className="relative flex h-12 w-12 items-center justify-center bg-white shadow-sm ring-1 ring-black/15">
                        <RiCodeSSlashLine className="size-6 text-violet-600" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight text-violet-500">
            Figma → Code → Live
            <div className="absolute top-1 -left-2 h-5 w-[3px] rounded-r-sm bg-violet-500" />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
            Pixel-perfect websites and apps, shipped fast
          </p>
          <p className="mt-4 text-balance text-gray-700">
            Your designs converted to clean, responsive, production-ready code no deviations, no back-and-forth.
          </p>
        </div>

        {/* 3. Built to Scale – Text left again */}
        <div className="col-span-2 my-auto px-2">
          <h2 className="relative text-lg font-semibold tracking-tight text-violet-500">
            Built to Scale
            <div className="absolute top-1 -left-2 h-5 w-[3px] rounded-r-sm bg-violet-500" />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
            Grow from MVP to enterprise seamlessly
          </p>
          <p className="mt-4 text-balance text-gray-700">
            Cloud-native, modular, future-proof. Add features, users, or devices without rewriting a line.
          </p>
        </div>
        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg className="absolute size-full">
            <defs>
              <pattern id="diagonal-feature-pattern" patternUnits="userSpaceOnUse" width="64" height="64">
                {Array.from({ length: 17 }, (_, i) => (
                  <path key={i} d={`M${-106 + i * 8} 110L${22 + i * 8} -18`} className="stroke-gray-200/70" strokeWidth="1" />
                ))}
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-feature-pattern)" />
          </svg>
          <div className="pointer-events-none relative flex size-full h-104 items-center justify-center p-10 select-none">
            <div className="relative">
              <div className="absolute top-24 left-24 z-20">
                <div className="mx-auto w-fit rounded-full bg-gray-50 p-1 shadow-md ring-1 ring-black/10">
                  <div className="w-fit rounded-full bg-linear-to-b from-white to-gray-100 p-3 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.09),0_3px_5px_0_rgba(0,0,0,0.19)] ring-1 ring-white/50 ring-inset">
                    <RiRocketLine className="size-5 text-gray-900" />
                  </div>
                </div>
              </div>
              <div className="absolute top-24 right-24 z-20">
                <div className="mx-auto w-fit rounded-full bg-gray-50 p-1 shadow-md ring-1 ring-black/10">
                  <div className="w-fit rounded-full bg-linear-to-b from-white to-gray-100 p-3 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-1 ring-white/50 ring-inset">
                    <RiDeviceLine className="size-5 text-gray-900" />
                  </div>
                </div>
              </div>
              <div className="absolute right-24 bottom-24 z-20">
                <div className="mx-auto w-fit rounded-full bg-gray-50 p-1 shadow-md ring-1 ring-black/10">
                  <div className="w-fit rounded-full bg-linear-to-b from-white to-gray-100 p-3 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-1 ring-white/50 ring-inset">
                    <RiCloudLine className="size-5 text-gray-900" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-24 left-24 z-20">
                <div className="mx-auto w-fit rounded-full bg-gray-50 p-1 shadow-md ring-1 ring-black/10">
                  <div className="w-fit rounded-full bg-linear-to-b from-white to-gray-100 p-3 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-1 ring-white/50 ring-inset">
                    <RiCpuLine className="size-5 text-gray-900" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {[0, 45, 135, 180, 225, 315].map((rotation, i) => (
                <div key={i} className="absolute origin-left overflow-hidden" style={{ transform: `rotate(${rotation}deg)` }}>
                  <div className="relative">
                    <div className="h-0.5 w-60 bg-linear-to-r from-gray-300 to-transparent" />
                    <div
                      className="absolute top-0 left-0 h-0.5 w-28 bg-linear-to-r from-transparent via-violet-300 to-transparent"
                      style={{ animation: `gridMovingLine 5s linear infinite ${i * 1.2}s`, animationFillMode: "backwards" }}
                    />
                  </div>
                </div>
              ))}
              <div className="absolute -translate-x-1/2 -translate-y-1/2">
                <ChipViz />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}