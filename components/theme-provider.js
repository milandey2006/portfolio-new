"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export const ThemeContext = createContext({
  theme: "system",
  setTheme: () => null,
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("system")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("theme")
    if (stored) setTheme(stored)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      root.classList.add(systemTheme)
      localStorage.removeItem("theme")
    } else {
      root.classList.add(theme)
      localStorage.setItem("theme", theme)
    }
  }, [theme, mounted])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
