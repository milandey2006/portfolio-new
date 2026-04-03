import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-24 border-t border-border pt-12 pb-8">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        <div className="col-span-2 space-y-4 sm:col-span-1">
          <h4 className="font-medium">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/" className="transition-colors hover:text-primary">Home</Link></li>
            <li><Link href="/work" className="transition-colors hover:text-primary">Work</Link></li>
            <li><Link href="/resume" className="transition-colors hover:text-primary">Resume</Link></li>
            <li><Link href="/projects" className="transition-colors hover:text-primary">Projects</Link></li>
          </ul>
        </div>

        <div className="col-span-2 space-y-4 sm:col-span-1 border-border">
          <ul className="space-y-2 text-sm text-muted mt-[34px]">
            <li><Link href="/gears" className="transition-colors hover:text-primary">Gears</Link></li>
            <li><Link href="/setup" className="transition-colors hover:text-primary">Setup</Link></li>
            <li><Link href="/terminal" className="transition-colors hover:text-primary">Terminal</Link></li>
            <li><Link href="/books" className="transition-colors hover:text-primary">Books</Link></li>
            <li><Link href="/movies" className="transition-colors hover:text-primary">Movies</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-sm text-muted">
        © {currentYear} Milan Dey. All rights reserved.
      </div>
    </footer>
  )
}
