"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useSpring } from 'framer-motion'
import { FiGithub as Github, FiGlobe as Globe } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: "PeixEdu | Most Trusted Name In Finance Education",
    description: "A leading institute providing expert-led coaching for global finance credentials like CMA, CPA, and ACCA. Empowering professionals to achieve international success through results-driven programs.",
    tags: ["React", "Next.js", "Tailwind CSS", "Educational Platform"],
    liveUrl: "https://www.peixedu.com/",
    repoUrl: null,
    previewImage: "/projects/peix.png"
  },
  {
    id: 2,
    title: "MSE Logistics | Expert B2B Supply Chain Solutions",
    description: "Comprehensive end-to-end logistics and global supply chain management focusing on precision and real-time intelligence for B2B corridor solutions.",
    tags: ["Next.js", "B2B Logistics", "Supply Chain", "Real-time Intelligence"],
    liveUrl: "https://mselogistics.co.in/",
    repoUrl: null,
    previewImage: "/projects/mse.png"
  },
  {
    id: 3,
    title: "Champion Security System | Premier Surveillance Solutions",
    description: "Expert CCTV installation and 24/7 monitoring services. Offering STQC and BIS-certified surveillance systems ensuring maximum safety and reliability.",
    tags: ["Surveillance", "Security", "CCTV", "Monitoring"],
    liveUrl: "https://championsecuritysystem.com/",
    repoUrl: null,
    previewImage: "/projects/css.png"
  },
  {
    id: 4,
    title: "Glass Mate Media | Creative Visual Agency",
    description: "A visual storytelling agency focused on 'Stories That Sell'. Specializing in video production, Reels, and digital branding for high-impact content.",
    tags: ["Video Production", "Branding", "Creative Agency", "Media"],
    liveUrl: "https://glassmatemedia.com/",
    repoUrl: null,
    previewImage: "/projects/gmm.png"
  },
  {
    id: 5,
    title: "Atul Bali | Actor, Writer, and Mentor",
    description: "Professional portfolio and mentoring platform for Atul Bali. Combining theatre traditions and spiritual insights for transformative learning experiences.",
    tags: ["Portfolio", "Mentorship", "Personal Brand", "Theatre"],
    liveUrl: "https://atulbali.in/",
    repoUrl: null,
    previewImage: "/projects/atul.png"
  },
  {
    id: 6,
    title: "AquaMaritime Logistics | Global Freight & 3PL Solutions",
    description: "20 years of excellence in sea, air, and project cargo. Providing seamless 3PL and door-to-door solutions globally for diverse businesses.",
    tags: ["Maritime", "Logistics", "Freight", "3PL"],
    liveUrl: "https://aquamaritime.in/",
    repoUrl: null,
    previewImage: "/projects/aqua.png"
  },
  {
    id: 7,
    title: "TruHauL Logistics | Trusted Global Transport",
    description: "Delivering beyond borders with comprehensive road, air, and sea freight services. Specializing in secure warehousing and trusted transport solutions.",
    tags: ["Transport", "Freight", "Global Logistics", "Warehousing"],
    liveUrl: "https://truhl.com/",
    repoUrl: null,
    previewImage: "/projects/truhaul.png"
  },
]

export default function ProjectsSection({ limit }) {
  const [hoveredImage, setHoveredImage] = useState(null)
  
  // Slower, more relaxed spring physics for the floating image
  const springConfig = { stiffness: 150, damping: 25 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  const handleMouseMove = (e) => {
    // Added 15px offset so cursor doesn't cover the image
    mouseX.set(e.clientX + 15)
    mouseY.set(e.clientY + 15)
  }

  const displayedProjects = limit ? projects.slice(0, limit) : projects

  return (
    <section 
      className="flex flex-col gap-6 mt-6 relative"
    >
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold tracking-tight">Projects</h2>
        <span className="text-muted text-xl font-medium">#</span>
        <span className="text-muted-foreground text-[14px] font-medium ml-1">(sorted by most recent)</span>
      </div>

      <div 
        className="flex flex-col gap-4"
        onMouseMove={handleMouseMove}
      >
        {displayedProjects.map((project) => (
          <div 
            key={project.id}
            className="group flex flex-col gap-4 rounded-md border border-border p-6 transition-colors relative cursor-pointer dark:hover:border-neutral-600"
            onMouseEnter={(e) => {
              mouseX.jump(e.clientX + 15)
              mouseY.jump(e.clientY + 15)
              setHoveredImage(project.previewImage)
            }}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <h3 className="font-semibold text-[17px] text-primary">{project.title}</h3>
              <div className="flex items-center gap-2">
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-[4px] border border-border px-3 py-1.5 text-[13px] font-medium transition-all hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Globe className="h-[14px] w-[14px]" />
                  Visit
                </a>
                {project.repoUrl && project.repoUrl !== '#' && (
                  <a 
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-[4px] bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-3 py-1.5 text-[13px] font-medium transition-opacity hover:opacity-90"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-[14px] w-[14px]" />
                    Code
                  </a>
                )}
              </div>
            </div>

            <div className="my-1 border-t border-border/50 max-w-full" />

            <p className="text-muted-foreground text-[14px] leading-relaxed max-w-[95%]">
              {project.description}
            </p>

            <div className="my-1 border-t border-border/50 max-w-full" />

            <div className="flex flex-wrap items-center gap-2 mt-1">
              {project.tags.map(tag => (
                <span 
                  key={tag}
                  className="rounded-[4px] border border-border px-2.5 py-1 text-[12px] font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {limit && projects.length > limit && (
        <div className="flex justify-center mt-2">
          <Link href="/projects" className="rounded-md border border-border px-4 py-[6px] text-[14px] font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10 hover:text-primary focus:outline-none">
            Show all projects
          </Link>
        </div>
      )}

      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 150, damping: 25 }}
            className="pointer-events-none fixed top-0 left-0 z-[100] h-38 w-[240px] overflow-hidden rounded-sm border border-border bg-background shadow-2xl"
            style={{
              x: mouseX,
              y: mouseY,
            }}
          >
            <img 
              src={hoveredImage} 
              alt="Project preview"
              className="h-full w-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
