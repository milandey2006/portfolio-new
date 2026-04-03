"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useSpring } from 'framer-motion'
import { FiGithub as Github, FiGlobe as Globe } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: "F2F Trade - Face to Face Crypto Exchange",
    description: "Crypto Listing platform for Face to Face crypto traders to find buyers and sellers around their location with Mobile and KYC verification for security",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose", "NextAuth.js"],
    liveUrl: "#",
    repoUrl: "#",
    previewImage: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "DSA Stats - Cross Platform DSA Analytics",
    description: "DSA stats analytics platform with leaderboard and shareable profile cards. Ranked 19th globally on product hunt! Features include real-time analytics and detailed statistics.",
    tags: ["React", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose", "Express.js"],
    liveUrl: "#",
    repoUrl: "#",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "GitLeet - Combine Github and Leetcode Heatmap and stats",
    description: "Built a platform that integrates Github and Leetcode data to provide insights and visualizations on users' productivity, by visualizing it with Heatmaps and combined stats.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Shadcn", "Web3js", "Jupiter API"],
    liveUrl: "#",
    repoUrl: "#",
    previewImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop"
  }
]

export default function ProjectsSection({ limit }) {
  const [hoveredImage, setHoveredImage] = useState(null)
  
  // Smooth spring physics for the floating image
  const springConfig = { stiffness: 400, damping: 25 }
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
            onMouseEnter={() => setHoveredImage(project.previewImage)}
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
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
