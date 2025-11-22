import { RiArrowRightUpLine } from "@remixicon/react"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"
import GameOfLife from "./HeroBackground"

export function Hero() {
  return (
    <section aria-label="hero">
      <FadeContainer className="relative flex flex-col items-center justify-center">
        <FadeDiv className="mx-auto">
          <a
            aria-label="View latest update"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-full"
          >
            <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-white/5 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 shadow-lg ring-1 shadow-violet-400/20 ring-black/10 filter backdrop-blur-[1px] transition-colors hover:bg-violet-500/2.5 sm:text-sm">
              <span className="shrink-0 rounded-full border bg-gray-50 px-2.5 py-1 text-xs text-gray-600">
                New
              </span>
              <span className="flex items-center gap-1 truncate">
                <span className="truncate">AI Design → Code is live</span>
                <RiArrowRightUpLine className="size-4 shrink-0 text-gray-700" />
              </span>
            </div>
          </a>
        </FadeDiv>

        <h1 className="mt-8 text-center text-5xl font-semibold tracking-tighter text-gray-900 sm:text-8xl sm:leading-22">
          <FadeSpan>Your</FadeSpan> <FadeSpan>Vision</FadeSpan>
          <br />
          <FadeSpan>Shipped</FadeSpan> <FadeSpan>Fast</FadeSpan>
        </h1>

        <p className="mt-5 max-w-xl text-center text-base text-balance text-gray-700 sm:mt-8 sm:text-xl">
          <FadeSpan>We build websites, mobile apps, Figma-to-code,</FadeSpan>{" "}
          <FadeSpan>cloud backends & embedded systems</FadeSpan>{" "}
          <FadeSpan>pixel-perfect and production-ready.</FadeSpan>
        </p>

        <FadeDiv>
          <a
            className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-md border-b-[1.5px] border-violet-700 bg-linear-to-b from-violet-400 to-violet-500 px-5 py-3 font-medium tracking-wide text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all hover:shadow-violet-300"
            href="#"
          >
            Let&apos;s build together
          </a>
        </FadeDiv>

        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <GameOfLife />
        </div>
      </FadeContainer>
    </section>
  )
}
