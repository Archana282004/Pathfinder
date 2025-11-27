"use client"

import { Home, Users, BarChart3, Settings, BookOpen } from "lucide-react"
import NavMenu from "."

const AdminNav = () => {

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: Home },
    { href: "/admin/users", label: "Users", icon: Users },
    { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
     { href: "/admin/resources", label: "Resources", icon: BookOpen },
    { href: "/admin/settings", label: "Settings", icon: Settings },

  ]

  return (
    <NavMenu
      navItems={navItems}
    />
  )
}

export default AdminNav;