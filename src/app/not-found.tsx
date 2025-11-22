import { Button } from "@/components/Button"
import Link from "next/link"
import { siteConfig } from "./siteConfig"
import { TrackNinjaMark } from "../../public/TrackNinjaMark"

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Link
            href={siteConfig.baseLinks.home}
            aria-label="Home"
            className="flex items-center gap-2 text-[#0f172a]"
          >
            <span className="sr-only">Track Ninja</span>
            <TrackNinjaMark className="w-8" />
            <p className="text-lg font-semibold">Track Ninja</p>
          </Link>
      <p className="mt-6 text-4xl font-semibold text-violet-600 sm:text-5xl">
        Error 404
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-gray-900">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Button asChild className="group mt-8" variant="light">
        <Link href={siteConfig.baseLinks.home}>Go to the home page</Link>
      </Button>
    </div>
  )
}
