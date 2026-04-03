"use client"

import Link from "next/link"
import { Check, Copy } from "lucide-react"
import { 
  SiYoutubemusic, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiTailwindcss, SiPostgresql, SiPrisma, 
  SiDocker, SiRedis, SiReactquery, SiStorybook, 
  SiTimescale, SiZod 
} from "react-icons/si"
import { FaAws } from "react-icons/fa"
import { useState } from "react"
import { SocialLinks } from "@/components/social-links"
import { Footer } from "@/components/footer"
import NowPlaying from "@/components/now-playing"
import ProjectsSection from "@/components/projects-section"

function TechBadge({ icon: Icon, name }) {
  return (
    <div className="flex items-center gap-1.5 rounded-sm border border-border bg-transparent px-2.5 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 cursor-default">
      <Icon className="h-[14px] w-[14px]" />
      <span>{name}</span>
    </div>
  )
}

export default function Home() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("deymilan066@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <div className="flex flex-col gap-12 pb-8 pt-10 font-sans">
        {/* Profile Section */}
        <section className="flex flex-col gap-5">
          <div className="flex items-center gap-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9XNrpBRj8WAD8R6ZaPuu5bS-pN1kDcrMY9w&s"
              alt="Milan Dey"
              width={100}
              height={100}
              className="rounded-full bg-blue-100 dark:bg-blue-900 shadow-sm"
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-[26px] font-bold tracking-tight">Milan Dey</h1>
              <div className="flex flex-wrap items-center gap-x-1.5 text-[15px] text-muted">
                <span>Full Stack Developer</span>
                <span>·</span>
                <span>Mumbai, India</span>
                <span>·</span>
                <span className="flex items-center gap-1.5 mr-1">Email <button
                  onClick={copyEmail}
                  className="flex items-center justify-center transition-colors hover:text-primary outline-none"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-green-500" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button></span>
              </div>
            </div>
          </div>

          <p className="text-muted text-[15px] leading-relaxed mt-2">
            MERN stack developer building robust APIs, scalable architectures, and official client platforms.
          </p>

          <div className="mt-1">
            <NowPlaying />
          </div>

          <div className="mt-2">
            <SocialLinks />
          </div>
        </section>

        {/* Experience Section */}
        <section className="flex flex-col gap-5 mt-6">
          <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold tracking-tight">Experience</h2>
        <span className="text-muted text-xl font-medium">#</span>
      </div>
          
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-[16px] text-primary">Freelance</span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#e6f4ea] px-2 py-0.5 text-[12px] font-medium text-black">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                    Working
                  </span>
                </div>
                <span className="text-muted text-[15px]">Full Stack Developer & Video Editor</span>
              </div>
              <div className="flex flex-col items-end text-[14px] text-muted whitespace-nowrap">
                <span>Oct 2025 – Present</span>
                <span className="mt-1">Remote</span>
              </div>
            </div>

            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-[16px] text-primary">GlassMate Media</span>
                <span className="text-muted text-[15px]">Creative Associate & Full Stack Dev</span>
              </div>
              <div className="flex flex-col items-end text-[14px] text-muted whitespace-nowrap">
                <span>Jul 2025 – Sep 2025</span>
                <span className="mt-1">Mumbai, IN</span>
              </div>
            </div>

            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-[16px] text-primary">Champion Security System</span>
                <span className="text-muted text-[15px]">Full Stack Developer</span>
              </div>
              <div className="flex flex-col items-end text-[14px] text-muted whitespace-nowrap">
                <span>Jan 2025 – Mar 2025</span>
                <span className="mt-1">Mumbai, IN</span>
              </div>
            </div>

            <div className="flex justify-center mt-3">
              <Link href="/work" className="rounded-md border border-border px-4 py-[6px] text-[14px] font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10 hover:text-primary focus:outline-none">
                Show all work experiences
              </Link>
            </div>
          </div>
        </section>

        <ProjectsSection limit={2} />

        {/* Tech Stack Section */}
        <section className="flex flex-col gap-6 mt-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold tracking-tight">Tech-Stack</h2>
            <span className="text-muted text-xl font-medium">#</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <TechBadge icon={SiJavascript} name="JavaScript" />
            <TechBadge icon={SiTypescript} name="TypeScript" />
            <TechBadge icon={SiReact} name="React" />
            <TechBadge icon={SiNextdotjs} name="Next.js" />
            <TechBadge icon={SiNodedotjs} name="Node.js" />
            <TechBadge icon={SiExpress} name="Express.js" />
            <TechBadge icon={SiTailwindcss} name="TailwindCSS" />
            <TechBadge icon={SiPostgresql} name="PostgreSQL" />
            <TechBadge icon={SiPrisma} name="Prisma" />
            <TechBadge icon={SiDocker} name="Docker" />
            <TechBadge icon={FaAws} name="AWS" />
            <TechBadge icon={SiRedis} name="Redis" />
            <TechBadge icon={SiReactquery} name="TanStack Query" />
            <TechBadge icon={SiStorybook} name="Storybook" />
            <TechBadge icon={SiTimescale} name="TimescaleDB" />
            <TechBadge icon={SiZod} name="Zod" />
          </div>

          <p className="text-muted text-[14px] font-medium mt-1">
            I'm great at context switching!
          </p>
        </section>

        {/* Development Section */}
        <section className="flex flex-col gap-6 mt-12">
          <h2 className="text-xl font-bold tracking-tight">Development</h2>
          <div className="flex flex-col gap-3">
            {[
              { title: "Gears", desc: "Tools, devices, and software I use to get work done.", href: "/gears" },
              { title: "Setup", desc: "VSCode / Cursor configuration and extensions guide.", href: "/setup" },
              { title: "Terminal", desc: "Zsh, Starship, Fastfetch, and shell configuration.", href: "/terminal" }
            ].map((item) => (
              <Link 
                key={item.title} 
                href={item.href}
                className="group flex flex-col gap-1 rounded-md border border-border p-4 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
              >
                <h3 className="font-semibold text-[15px] text-primary">{item.title}</h3>
                <p className="text-muted text-[14px] leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Personal Section */}
        <section className="flex flex-col gap-6 mt-12">
          <h2 className="text-xl font-bold tracking-tight">Personal</h2>
          <div className="flex flex-col gap-3">
            {[
              { title: "Books", desc: "Books that have influenced my thinking and growth.", href: "/books" },
              { title: "Movies", desc: "Films and shows that have inspired and entertained me.", href: "/movies" }
            ].map((item) => (
              <Link 
                key={item.title} 
                href={item.href}
                className="group flex flex-col gap-1 rounded-md border border-border p-4 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
              >
                <h3 className="font-semibold text-[15px] text-primary">{item.title}</h3>
                <p className="text-muted text-[14px] leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
