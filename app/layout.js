import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { CommandPalette } from "@/components/command-palette";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Milan Dey - Full Stack Developer",
  description: "I'm a Full Stack developer specializing in React.js, Next.js, and the MERN stack. Explore my work, experience, and technical expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              let theme = localStorage.getItem("theme");
              if (!theme) theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
              document.documentElement.classList.add(theme);
            } catch (e) {}
          `}
        </Script>
      </head>
      <body
        className={`${geist.variable} font-sans min-h-screen bg-background text-primary antialiased selection:bg-neutral-200 dark:selection:bg-neutral-800 selection:text-primary transition-colors duration-300`}
      >
        <ThemeProvider>
          <div className="mx-auto max-w-[700px] px-6 py-12 md:py-16">
            <Navbar />
             <CommandPalette />
             <main className="mt-16 w-full">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
