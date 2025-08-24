"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const THEME_CLASSES = ["", "theme-clean", "theme-amber"] as const
type ThemeClass = (typeof THEME_CLASSES)[number]

const STORAGE_KEY = "preview-theme"

export function ThemePreviewToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const [current, setCurrent] = useState<ThemeClass>("")

  // طبّق الثيم المحفوظ (لو موجود) عند التحميل
  useEffect(() => {
    setMounted(true)
    const saved = (typeof window !== "undefined"
      ? (localStorage.getItem(STORAGE_KEY) as ThemeClass | null)
      : null) ?? ""
    applyTheme(saved)
  }, [])

  const applyTheme = (theme: ThemeClass) => {
    const html = document.documentElement
    // احذف أي ثيم سابق
    THEME_CLASSES.forEach((t) => {
      if (t) html.classList.remove(t)
    })
    // أضف الثيم الجديد (فارغ = Vercel الافتراضي)
    if (theme) html.classList.add(theme)
    setCurrent(theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }

  if (!mounted) {
    // زرار هيكلي بسيط لتفادي مشاكل الـ SSR
    return (
      <div className={cn("inline-flex gap-2", className)}>
        <Button variant="outline" size="sm">Vercel</Button>
        <Button variant="outline" size="sm">Clean</Button>
        <Button variant="outline" size="sm">Amber</Button>
      </div>
    )
  }

  const btnBase =
    "size-sm rounded-md border border-border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

  const active =
    "bg-primary text-primary-foreground border-transparent"

  const inactive =
    "hover:shadow-sm"

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <button
        type="button"
        onClick={() => applyTheme("")}
        className={cn("px-3 py-1.5 text-sm", btnBase, current === "" ? active : inactive)}
        aria-pressed={current === ""}
      >
        Vercel
      </button>
      <button
        type="button"
        onClick={() => applyTheme("theme-clean")}
        className={cn("px-3 py-1.5 text-sm", btnBase, current === "theme-clean" ? active : inactive)}
        aria-pressed={current === "theme-clean"}
      >
        Clean
      </button>
      <button
        type="button"
        onClick={() => applyTheme("theme-amber")}
        className={cn("px-3 py-1.5 text-sm", btnBase, current === "theme-amber" ? active : inactive)}
        aria-pressed={current === "theme-amber"}
      >
        Amber
      </button>
    </div>
  )
}
