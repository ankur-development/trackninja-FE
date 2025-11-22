import {
  RiGithubFill,
  RiSlackFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "@remixicon/react"
import Link from "next/link"
import { TrackNinjaMark } from "../../../public/TrackNinjaMark"

const CURRENT_YEAR = new Date().getFullYear()

type SectionItem = { label: string; href: string; external?: boolean }
type Section = { title: string; items: SectionItem[] }

const Footer = () => {
  const sections: Record<string, Section> = {
    product: {
      title: "Product",
      items: [
        { label: "Web Apps", href: "#services" },
        { label: "Mobile Apps", href: "#services" },
        { label: "Figma to Code", href: "#services" },
        { label: "Cloud Backends", href: "#services" },
        { label: "Embedded Systems", href: "#services" },
        { label: "Performance Audit", href: "#services" },
      ],
    },
    work: {
      title: "Work",
      items: [
        { label: "Case Studies", href: "#work" },
        { label: "Featured Projects", href: "#work" },
        { label: "Client Stories", href: "#work" },
        { label: "Live Products", href: "#work" },
      ],
    },
    company: {
      title: "Company",
      items: [
        { label: "About", href: "/about" },
        { label: "Process", href: "#process" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "#contact" },
      ],
    },
    resources: {
      title: "Resources",
      items: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Security", href: "/security" },
        { label: "Status", href: "https://status.trackninja.com", external: true },
      ],
    },
  }

  return (
    <div className="px-4 xl:px-0">
      <footer id="footer" className="relative mx-auto flex max-w-6xl flex-wrap pt-4">
        {/* Vertical dashed lines */}
        <div className="pointer-events-none inset-0">
          <div className="absolute inset-y-0 -my-20 w-px" style={{ maskImage: "linear-gradient(transparent, white 5rem)" }}>
            <svg className="h-full w-full" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
          </div>
          <div className="absolute inset-y-0 right-0 -my-20 w-px" style={{ maskImage: "linear-gradient(transparent, white 5rem)" }}>
            <svg className="h-full w-full" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
          </div>
        </div>

        {/* Diagonal divider */}
        <svg className="mb-10 h-20 w-full border-y border-dashed border-gray-300 stroke-gray-300">
          <defs>
            <pattern id="diagonal-footer-pattern" patternUnits="userSpaceOnUse" width="64" height="64">
              {Array.from({ length: 17 }, (_, i) => {
                const offset = i * 8
                return <path key={i} d={`M${-106 + offset} 110L${22 + offset} -18`} stroke="" strokeWidth="1" />
              })}
            </pattern>
          </defs>
          <rect stroke="none" width="100%" height="100%" fill="url(#diagonal-footer-pattern)" />
        </svg>

        {/* Logo + Socials */}
        <div className="mr-auto flex w-full justify-between lg:w-fit lg:flex-col">
          <Link href="/" aria-label="Track Ninja Home" className="flex items-center gap-2 text-[#0f172a]">
            <span className="sr-only">Track Ninja</span>
            <TrackNinjaMark className="w-6" />
            <p className="text-base font-semibold">Track Ninja</p>
          </Link>

          <div>
            <div className="mt-4 flex items-center gap-1">
              <Link href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition hover:bg-gray-200 hover:text-gray-900">
                <RiTwitterXFill className="size-5" />
              </Link>
              <Link href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition hover:bg-gray-200 hover:text-gray-900">
                <RiYoutubeFill className="size-5" />
              </Link>
              <Link href="https://github.com/yourorg" target="_blank" rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition hover:bg-gray-200 hover:text-gray-900">
                <RiGithubFill className="size-5" />
              </Link>
              <Link href="https://slack.yourcommunity.com" target="_blank" rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition hover:bg-gray-200 hover:text-gray-900">
                <RiSlackFill className="size-5" />
              </Link>
            </div>
            <div className="ml-2 hidden text-sm text-gray-700 lg:inline">
              © {CURRENT_YEAR} Track Ninja Studio. All rights reserved.
            </div>
          </div>
        </div>

        {/* Footer Links */}
        {Object.entries(sections).map(([key, section]) => (
          <div key={key} className="mt-10 min-w-44 pl-2 lg:mt-0 lg:pl-0">
            <h3 className="mb-4 font-medium text-gray-900 sm:text-sm">{section.title}</h3>
            <ul className="space-y-4">
              {section.items.map((item) => (
                <li key={item.label} className="text-sm">
                  <Link
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    {item.label}
                    {item.external && <span className="ml-1 text-gray-400">↗</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
    </div>
  )
}

export default Footer