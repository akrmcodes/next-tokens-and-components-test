// app/layout.tsx
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Navbar5 } from "@/components/blocks/navbar-shadcn"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar5 />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
