import Image from "next/image"

export default function Testimonial() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl shadow-2xl shadow-[#366A79]/70">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          alt="Modern office with code and screens"
          src="/images/bg2.png"
          fill
          className="object-cover brightness-75 opacity-85"
          priority
        />
      </div>

      {/* Floating device (replaces the drone) */}
      <div className="absolute top-76 -right-14 w-76 sm:top-48 sm:right-3 sm:w-92 md:top-48 md:right-0 md:w-100 lg:top-52 lg:right-12 lg:w-84">
        <Image
          alt="MacBook Pro showing clean code and UI"
          src="/images/drone2.png"
          width={1583}
          height={554}
          className="animate-hover drop-shadow-2xl"
        />
      </div>

      {/* Quote */}
      <div className="relative z-20  p-8 sm:p-14 lg:p-24">
<blockquote className="relative max-w-2xl text-xl leading-relaxed tracking-tight text-white md:text-2xl lg:text-2xl">
  <p className="before:absolute before:-left-8 before:top-0 before:text-8xl before:font-light before:text-white/20 before:content-['“'] after:text-white/40 after:content-['”']">
    They just get it. Gave them Figma → 5 weeks later we had a live app that looks and feels perfect. No drama, no excuses. Highly recommend Track Ninja for any startup looking to ship fast with quality.
  </p>
</blockquote>

        {/* Author */}
        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="relative shrink-0 overflow-hidden rounded-xl bg-white/20 p-0.5 ring-1 ring-white/30 backdrop-blur-sm">
            <Image
              alt="Alex Rivera"
              src="/images/smiller.jpeg"
              width={56}
              height={56}
              className="rounded-xl object-cover"
            />
          </div>
          <div>
            <div className="text-base font-medium text-white">Alex Rivera</div>
            <div className="text-sm text-violet-300/90">
              CTO & Co-founder, NexusFlow
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
