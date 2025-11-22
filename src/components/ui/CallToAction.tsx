import Image from "next/image"
import Link from "next/link"
import { Button } from "../Button"

export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="mx-auto max-w-6xl">
      <div className="grid items-center gap-8 sm:grid-cols-6">
        {/* Left – Copy & CTAs */}
        <div className="sm:col-span-2">
          <h2
            id="cta-title"
            className="scroll-my-60 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl"
          >
            Ready to ship your next big thing?
          </h2>
          <p className="mt-3 mb-8 text-lg text-gray-600">
            Let’s turn your vision into a pixel-perfect, production-ready
            product in weeks, not months.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="#contact">Start your project</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#case-studies">See our work</Link>
            </Button>
          </div>
        </div>

        {/* Right – Hero image with blur effect */}
        <div className="relative isolate rounded-xl sm:col-span-4 sm:h-full">
          {/* Blurred background */}
          <Image
            aria-hidden
            alt="Studio desk with MacBook, iPhone mockup, and clean code"
            src="/images/bg.png"
            height={1200}
            width={1600}
            className="absolute inset-0 -z-10 rounded-2xl blur-xl saturate-150"
            quality={95}
          />
          {/* Sharp foreground */}
          <Image
            alt="Studio desk with MacBook, iPhone mockup, and clean code"
            src="/images/bg.png"
            height={1200}
            width={1600}
            className="relative z-10 rounded-2xl shadow-2xl"
            quality={95}
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default CallToAction
