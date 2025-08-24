// app/layout.tsx  (Server Component)
import "./globals.css"
import { Navbar5 } from "@/components/blocks/navbar-shadcn"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navbar5 />
        {children}
      </body>
    </html>
  )
}
