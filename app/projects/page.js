import ProjectsSection from "@/components/projects-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Projects - Milan Dey",
  description: "A showcase of my recent full-stack applications and professional projects.",
}

export default function ProjectsPage() {
  return (
    <>
      <div className="flex flex-col gap-12 pb-8 pt-10 font-sans">
        <ProjectsSection />
      </div>
      <Footer />
    </>
  )
}
