"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/resume", label: "Resume" },
    { href: "/projects", label: "Projects" },
  ]

  return (
    <header className="flex items-center justify-between font-sans">
      <nav className="flex items-center gap-5 text-[15px] font-medium text-muted">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "transition-colors hover:text-primary",
              pathname === link.href ? "text-primary" : "text-muted"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4 text-muted">
        <button 
          onClick={() => {
            const event = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true });
            document.dispatchEvent(event);
          }}
          className="flex items-center gap-2 h-9 px-3 rounded-full border border-border bg-transparent shadow-sm transition-colors hover:bg-black/5 dark:hover:bg-white/10 text-muted hover:text-primary"
          aria-label="Search"
        >
          <Search className="h-[15px] w-[15px]" />
          <div className="hidden sm:flex items-center gap-1 text-[13px] font-medium">
            <span>Ctrl</span>
            <kbd className="text-[11px] font-sans leading-none text-muted-foreground ml-0.5">K</kbd>
          </div>
        </button>

        <ThemeToggle />
      </div>
    </header>
  )
}
