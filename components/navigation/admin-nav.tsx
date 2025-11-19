"use client"

import { Home, Users, DollarSign, BarChart3, Settings } from "lucide-react"
import NavMenu from "."

const AdminNav = () => {

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: Home },
    { href: "/admin/users", label: "Users", icon: Users },
    { href: "/admin/payments", label: "Payments", icon: DollarSign },
    { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ]

  return (
    <NavMenu
     navItems={navItems}
     />
  )
}

export default AdminNav;