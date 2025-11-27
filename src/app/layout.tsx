import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { AuthProvider } from "@/src/contexts/auth-context"
import { Toaster } from "@/src/components/ui/toaster"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pathfinder - College Counseling Platform",
  description: "Connect with expert educators for college admissions guidance",
  generator: "v0.app",
}

const RootLayout=({
  children,
}: Readonly<{
  children: React.ReactNode
}>)=> {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}

export default  RootLayout;
