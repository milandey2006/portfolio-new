import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Work() {
  return (
    <div className="flex flex-col gap-12 pb-8 pt-10 font-sans">
      <section className="flex flex-col gap-4">
        <h1 className="text-[26px] font-bold tracking-tight">Work Experience</h1>
        <p className="text-muted text-[15px] leading-relaxed max-w-[500px]">
          A summary of my professional journey, including development, engineering, and digital media.
        </p>
      </section>

      <div className="flex flex-col gap-10">
        
        {/* Freelancing */}
        <div className="flex flex-col gap-1.5 border-l-2 border-primary/20 pl-4 py-1 relative">
          <div className="absolute -left-[5px] top-3 h-2 w-2 rounded-full bg-primary" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h2 className="text-[17px] font-bold text-primary">Freelance</h2>
            <span className="text-sm text-muted">2025 - Present</span>
          </div>
          <p className="text-[15px] font-medium text-muted">Full Stack Developer & Video Editor</p>
          <p className="text-[14px] text-muted mt-1 text-balance">
            Working independently to deliver full stack web applications and professional video editing services for various clients.
          </p>
        </div>

        {/* GlassMate Media */}
        <div className="flex flex-col gap-1.5 border-l-2 border-border pl-4 py-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h2 className="text-[17px] font-bold text-primary">GlassMate Media</h2>
            <span className="text-sm text-muted">07/2025 - 09/2025</span>
          </div>
          <p className="text-[15px] font-medium text-muted">Creative Associate & Full Stack Developer</p>
          <p className="text-[14px] text-muted mt-1">Hybrid · Mumbai, India</p>
        </div>

        {/* Champion Security System */}
        <div className="flex flex-col gap-3 border-l-2 border-border pl-4 py-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-[17px] font-bold text-primary">Champion Security System</h2>
            <span className="text-sm text-muted">01/2025 - 03/2025</span>
          </div>
          <p className="text-[15px] font-medium text-muted">Full Stack Developer</p>
          <ul className="list-disc list-inside text-[14px] text-muted space-y-1">
            <li>Engineered and maintained robust MERN stack APIs for scalable data management and system integrations.</li>
            <li>Implemented secure user authentication and authorization modules, enhancing system integrity and user experience.</li>
            <li>Designed, developed, and deployed the company's official website as a full-stack developer.</li>
          </ul>
        </div>

        {/* SP Digital Media */}
        <div className="flex flex-col gap-3 border-l-2 border-border pl-4 py-1">
           <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-[17px] font-bold text-primary">SP Digital Media</h2>
            <span className="text-sm text-muted">06/2024 - 12/2024</span>
          </div>
          <p className="text-[15px] font-medium text-muted">Video Editor (Remote)</p>
          <ul className="list-disc list-inside text-[14px] text-muted space-y-1">
            <li>Crafted and polished engaging video content for various digital platforms and client campaigns.</li>
            <li>Managed the full post-production journey, including editing, motion graphics, and sound.</li>
            <li>Collaborated with creative and marketing teams to produce impactful video assets for clients.</li>
          </ul>
        </div>

        {/* Ntech Global Solutions */}
         <div className="flex flex-col gap-3 border-l-2 border-border pl-4 py-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-[17px] font-bold text-primary">Ntech Global Solutions</h2>
            <span className="text-sm text-muted">05/2021 - 02/2022</span>
          </div>
          <p className="text-[15px] font-medium text-muted">Frontend Developer</p>
          <ul className="list-disc list-inside text-[14px] text-muted space-y-1">
            <li>Developed and launched diverse client websites for a digital agency, meeting unique business needs and design specifications.</li>
            <li>Utilized a broad tech stack including WordPress, HTML, CSS, JavaScript, Bootstrap, jQuery, PHP, and MySQL for robust web solutions.</li>
            <li>Managed the full website development lifecycle from conception to deployment, consistently delivering projects on time.</li>
          </ul>
        </div>

      </div>
      
      <div className="flex justify-start mt-4">
        <Link href="/" className="text-[14px] text-muted hover:text-primary transition-colors flex items-center gap-1">
          &larr; Back to Home
        </Link>
      </div>

      <Footer />
    </div>
  )
}
