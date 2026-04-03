import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Resume() {
  return (
    <div className="flex flex-col gap-12 pb-8 pt-10 font-sans">
      <section className="flex flex-col gap-4">
        <h1 className="text-[26px] font-bold tracking-tight">Resume</h1>
        <p className="text-muted text-[15px] leading-relaxed max-w-[500px]">
          Milan Dey - Full Stack Developer
        </p>
        <Link href="mailto:deymilan066@gmail.com" className="text-[14px] border-b border-border w-max hover:text-primary transition-colors pb-0.5 text-muted hover:border-primary">
          deymilan066@gmail.com
        </Link>
      </section>

      <section className="flex flex-col gap-6 mt-4">
        <h2 className="text-[20px] font-bold tracking-tight border-b border-border pb-3">Experience</h2>
        <div className="flex flex-col gap-7">
          
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-semibold text-[16px] text-primary">Freelancing</h3>
              <span className="text-[14px] text-muted whitespace-nowrap">2025 - Present</span>
            </div>
            <p className="text-[15px] text-muted">Full Stack Developer & Video Editor</p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-semibold text-[16px] text-primary">GlassMate Media</h3>
              <span className="text-[14px] text-muted whitespace-nowrap">07/2025 - 09/2025</span>
            </div>
            <p className="text-[15px] text-muted">Creative Associate & Full Stack Developer</p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-semibold text-[16px] text-primary">Champion Security System</h3>
              <span className="text-[14px] text-muted whitespace-nowrap">01/2025 - 03/2025</span>
            </div>
            <p className="text-[15px] text-muted">Full Stack Developer</p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-semibold text-[16px] text-primary">SP Digital Media</h3>
              <span className="text-[14px] text-muted whitespace-nowrap">06/2024 - 12/2024</span>
            </div>
            <p className="text-[15px] text-muted">Video Editor</p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-semibold text-[16px] text-primary">Ntech Global Solutions</h3>
              <span className="text-[14px] text-muted whitespace-nowrap">05/2021 - 02/2022</span>
            </div>
            <p className="text-[15px] text-muted">Frontend Developer</p>
          </div>

        </div>
      </section>
      
      <div className="flex justify-start mt-4">
        <Link href="/" className="text-[14px] text-muted hover:text-primary transition-colors flex items-center gap-1">
          &larr; Back to Home
        </Link>
      </div>

      <Footer />
    </div>
  )
}
