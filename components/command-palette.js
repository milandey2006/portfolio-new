"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Command } from "cmdk"
import { 
  Search, Home, Briefcase, FileText, 
  Settings, Book, Film, Wrench, TerminalSquare, 
  Sun, Moon, Command as CommandIcon, Mail, Share2, 
  Music
} from "lucide-react"
import { FiGithub as Github } from "react-icons/fi"
import { SiYoutubemusic } from "react-icons/si"
import { useTheme } from "./theme-provider"
import { cn } from "@/lib/utils"

function ItemTemplate({ icon: Icon, title, subtitle, shortcut }) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4 text-muted-foreground" />
        <div className="flex flex-col gap-0.5 text-left">
          <span className="text-[14px] font-medium text-primary">{title}</span>
          <span className="text-[12px] text-muted-foreground">{subtitle}</span>
        </div>
      </div>
      {shortcut && (
        <kbd className="hidden sm:inline-flex h-5 items-center font-mono text-[10px] font-medium text-muted-foreground ml-2">
          {shortcut}
        </kbd>
      )}
    </div>
  )
}

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const { setTheme, theme } = useTheme()

  React.useEffect(() => {
    const down = (e) => {
      // Ignore key events when the user is typing in an input or textarea
      if (
        e.target.tagName === "INPUT" || 
        e.target.tagName === "TEXTAREA" || 
        e.target.isContentEditable ||
        (open && e.target.closest('[cmdk-input-wrapper]'))
      ) {
        // Only allow CMD+K to close if input is focused
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((open) => !open)
        }
        return
      }

      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
        return
      }

      if (!e.metaKey && !e.ctrlKey && !e.altKey) {
        const key = e.key.toLowerCase()

        if (e.shiftKey) {
          if (key === "e") {
            e.preventDefault()
            navigator.clipboard.writeText("deymilan066@gmail.com")
            setOpen(false)
          } else if (key === "s") {
            e.preventDefault()
            if (navigator.share) {
              navigator.share({ title: "Milan Dey - Portfolio", url: window.location.href })
            } else {
              navigator.clipboard.writeText(window.location.href)
            }
            setOpen(false)
          } else if (key === "g") {
            e.preventDefault()
            window.open("https://github.com/milandey2006", "_blank")
            setOpen(false)
          } else if (key === "m") {
            e.preventDefault()
            window.open("https://music.youtube.com", "_blank")
            setOpen(false)
          }
        } else {
          // Single character shortcuts
          if (key === "h") {
            e.preventDefault()
            router.push("/")
            setOpen(false)
          } else if (key === "w") {
            e.preventDefault()
            router.push("/work")
            setOpen(false)
            setOpen(false)
          } else if (key === "r") {
            e.preventDefault()
            router.push("/resume")
            setOpen(false)
          } else if (key === "p") {
            e.preventDefault()
            router.push("/projects")
            setOpen(false)
          } else if (key === "g") {
            e.preventDefault()
            router.push("/gears")
            setOpen(false)
          } else if (key === "t") {
            e.preventDefault()
            setTheme(theme === "dark" ? "light" : "dark")
            setOpen(false)
          } else if (key === "k") {
            e.preventDefault()
            router.push("/#")
            setOpen(false)
          } else if (key === "m") {
            e.preventDefault()
            router.push("/#")
            setOpen(false)
          } else if (key === "s") {
            e.preventDefault()
            router.push("/#")
            setOpen(false)
          }
        }
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [router, theme, setTheme, open])

  const runCommand = React.useCallback((command) => {
    setOpen(false)
    command()
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] sm:pt-[20vh]">
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm" 
        onClick={() => setOpen(false)}
      />
      
      <div className="relative z-50 w-full max-w-[550px] overflow-hidden rounded-xl border border-border bg-background shadow-2xl">
        <Command 
          label="Command Menu" 
          className="flex h-full w-full flex-col overflow-hidden bg-transparent"
        >
          <div className="flex items-center border-b border-border px-3" cmdk-input-wrapper="">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input 
              autoFocus
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-[14px] outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" 
              placeholder="Type a command or search..." 
            />
          </div>
          <Command.List className="max-h-[350px] overflow-y-auto overflow-x-hidden p-2">
            <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>
            
            <Command.Group heading="Navigation" className="text-[12px] font-medium text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:mb-1">
              <Command.Item 
                onSelect={() => runCommand(() => router.push("/"  ))}
                className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 outline-none data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10 mb-1"
              >
                <ItemTemplate icon={Home} title="Go to Home" subtitle="Navigate to the homepage" shortcut="H" />
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push("/work"))}
                className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 outline-none data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10 mb-1"
              >
                <ItemTemplate icon={Briefcase} title="Go to Work" subtitle="View work experience" shortcut="W" />
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push("/resume"))}
                className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 outline-none data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10 mb-1"
              >
                <ItemTemplate icon={FileText} title="Go to Resume" subtitle="View and download resume" shortcut="R" />
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push("/projects"))}
                className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 outline-none data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10 mb-1"
              >
                <ItemTemplate icon={Settings} title="Go to Projects" subtitle="View all my projects" shortcut="P" />
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push("/gears"))}
                className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 outline-none data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10 mb-1"
              >
                <ItemTemplate icon={Settings} title="Go to Gears" subtitle="View hardware and equipment setup" shortcut="G" />
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push("/#"))}
                className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 outline-none data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10 mb-1"
              >
                <ItemTemplate icon={Book} title="Go to Books" subtitle="View recommended books and reading list" shortcut="K" />
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push("/#"))}
                className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 outline-none data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10 mb-1"
              >
                <ItemTemplate icon={Film} title="Go to Movies" subtitle="View favorite movies and shows" shortcut="M" />
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push("/#"))}
                className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 outline-none data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10 mb-1"
              >
                <ItemTemplate icon={Wrench} title="Go to Setup" subtitle="View development setup and tools" shortcut="S" />
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push("/#"))}
                className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 outline-none data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10"
              >
                <ItemTemplate icon={TerminalSquare} title="Go to Terminal" subtitle="Terminal setup guide" />
              </Command.Item>
            </Command.Group>

            <div className="h-px bg-border my-2" />

            <Command.Group heading="Features" className="text-[12px] font-medium text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:mb-1">
              <Command.Item 
                onSelect={() => runCommand(() => setTheme(theme === "dark" ? "light" : "dark"))}
                className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 outline-none data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10 mb-1"
              >
                <ItemTemplate icon={theme === "dark" ? Sun : Moon} title="Toggle Theme" subtitle="Switch between light and dark mode" shortcut="T" />
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => {})}
                className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 outline-none data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10"
              >
                <ItemTemplate icon={CommandIcon} title="Command Palette" subtitle="Open the command palette" shortcut="Ctrl+K" />
              </Command.Item>
            </Command.Group>

            <div className="h-px bg-border my-2" />

            <Command.Group heading="Actions" className="text-[12px] font-medium text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:mb-1">
              <Command.Item 
                onSelect={() => runCommand(() => navigator.clipboard.writeText("deymilan066@gmail.com"))}
                className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 outline-none data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10 mb-1"
              >
                <ItemTemplate icon={Mail} title="Copy Email" subtitle="Copy email address to clipboard" shortcut="Shift+E" />
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => {
                  if (navigator.share) {
                    navigator.share({ title: "Milan Dey - Portfolio", url: window.location.href })
                  } else {
                    navigator.clipboard.writeText(window.location.href)
                  }
                })}
                className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 outline-none data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10 mb-1"
              >
                <ItemTemplate icon={Share2} title="Share Page" subtitle="Share the current page" shortcut="Shift+S" />
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => window.open("https://github.com/milandey2006", "_blank"))}
                className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 outline-none data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10 mb-1"
              >
                <ItemTemplate icon={Github} title="View GitHub Profile" subtitle="Open GitHub profile in a new tab" shortcut="Shift+G" />
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => window.open("https://music.youtube.com", "_blank"))}
                className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 outline-none data-[selected=true]:bg-black/5 dark:data-[selected=true]:bg-white/10"
              >
                <ItemTemplate icon={SiYoutubemusic} title="Open YT Music" subtitle="Open YouTube Music in a new tab" shortcut="Shift+M" />
              </Command.Item>
            </Command.Group>

          </Command.List>
        </Command>
      </div>
    </div>
  )
}
