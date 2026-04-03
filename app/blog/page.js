import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Blog() {
  return (
    <div className="flex flex-col gap-12 pt-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted text-[15px] leading-relaxed">
          Articles on web development, taste, and engineering.
        </p>
      </section>

      <div className="flex flex-col gap-8">
        <Link href="/blog/how-to-optimise" className="group flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold leading-tight group-hover:underline underline-offset-4">How to optimise a Next.js web app</h3>
            <span className="text-xs text-muted transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-200">Read more →</span>
          </div>
          <p className="text-muted text-sm mt-1">Optimise your Next.js web app to make it lightning fast!</p>
          <span className="text-xs text-muted mt-2">January 31, 2026</span>
        </Link>
      </div>
      
      <div className="flex justify-start">
        <Link href="/" className="text-sm text-muted hover:text-primary transition-colors">
          ← Back to Home
        </Link>
      </div>

      <Footer />
    </div>
  )
}
