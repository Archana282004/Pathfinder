"use client"

import { Home, Calendar, MessageSquare, DollarSign, Clock } from "lucide-react"
import NavMenu from "."

const EducatorNav = () => {

  const navItems = [
    { href: "/educator/dashboard", label: "Dashboard", icon: Home },
    { href: "/educator/sessions", label: "Sessions", icon: Calendar },
    { href: "/educator/chat", label: "Chat", icon: MessageSquare },
    { href: "/educator/availability", label: "Availability", icon: Clock },
    { href: "/educator/earnings", label: "Earnings", icon: DollarSign },
  ]

  return (
    <NavMenu
     navItems={navItems}
     />
  )
}

export default EducatorNav;