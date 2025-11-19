"use client"

import { Home, Calendar, MessageSquare, Wallet, BookOpen } from "lucide-react"
import NavMenu from "."

const StudentNav = () => {

  const navItems = [
    { href: "/student/dashboard", label: "Dashboard", icon: Home },
    { href: "/student/sessions", label: "Sessions", icon: Calendar },
    { href: "/student/chat", label: "Chat", icon: MessageSquare },
    { href: "/student/wallet", label: "Wallet", icon: Wallet },
    { href: "/student/resources", label: "Resources", icon: BookOpen },
  ]

  return (
    <NavMenu 
    navItems={navItems}
    />
  )
}

export default StudentNav;