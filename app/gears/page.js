"use client"

import { Footer } from "@/components/footer"
import { FiMonitor, FiSmartphone, FiHeadphones, FiSpeaker } from "react-icons/fi"
import { Laptop, Keyboard, Mouse, ArrowUpRight } from "lucide-react"

export default function Gears() {
  const hardware = [
    {
      name: "Macbook Air M1 13\"",
      category: "Laptop",
      icon: Laptop,
      link: "https://www.apple.com/macbook-pro-14-and-16/",
    },
    {
      name: "LG 27\" 4K Monitor",
      category: "Display",
      icon: FiMonitor,
      link: "https://www.amazon.in/LG-27-inch-Monitor-FreeSync/dp/B08J5Y9TWF",
    },
    {
      name: "Portronics Hydra 10",
      category: "Keyboard",
      icon: Keyboard,
      link: "https://keychron.in/product/keychron-k2-v-2/",
    },
    {
      name: "Logitech MX Master 3",
      category: "Mouse",
      icon: Mouse,
      link: "https://www.amazon.in/Logitech-Master-Advanced-Wireless-Mouse/dp/B07VWXWP8R",
    },
     {
      name: "iPhone 13",
      category: "Phone",
      icon: FiSmartphone,
      link: "https://www.apple.com/shop/buy-iphone/iphone-13",
    },
     {
      name: "Boat Wired",
      category: "Audio",
      icon: FiHeadphones,
      link: "https://www.boat-lifestyle.com/products/bassheads-100-in-ear-earphones",
    }
  ]

  return (
    <div className="flex flex-col gap-10 pb-8 pt-10 font-sans">
      <section className="flex flex-col gap-3">
        <h1 className="text-[26px] font-bold tracking-tight">Gears</h1>
        <p className="text-muted text-[15px] leading-relaxed max-w-[500px]">
          Here is a list of gears that I use on a daily basis.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-bold tracking-tight">Devices & Accessories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hardware.map((item, index) => {
            const Icon = item.icon
            return (
              <a 
                key={index}
                href={item.link} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-border hover:bg-black/5 dark:hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/40 bg-transparent text-muted group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300">
                  <Icon className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-[15px] text-primary">{item.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </div>
                  <span className="text-[14px] text-muted">{item.category}</span>
                </div>
              </a>
            )
          })}
        </div>
      </section>

      <Footer />
    </div>
  )
}
