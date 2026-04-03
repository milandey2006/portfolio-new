import { Mail } from "lucide-react"
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi"
import Link from "next/link"

const SOCIAL_LINKS = [
  { href: "https://x.com/MilanDey090606", icon: FiTwitter, label: "X (Twitter)" },
  { href: "https://www.linkedin.com/in/milandey/", icon: FiLinkedin, label: "LinkedIn" },
  { href: "https://github.com/milandey2006", icon: FiGithub, label: "GitHub" },
  { href: "https://www.instagram.com/mi2anfr", icon: FiInstagram, label: "Instagram" },
  { href: "mailto:deymilan066@gmail.com", icon: Mail, label: "Email" },
]

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4 text-muted">
      {SOCIAL_LINKS.map((link) => {
        const Icon = link.icon
        return (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary dark:hover:text-primary"
            aria-label={link.label}
          >
            <Icon className="h-[18px] w-[18px] stroke-[1.5]" />
          </Link>
        )
      })}
    </div>
  )
}
