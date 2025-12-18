"use client"

import { useAuth } from "@/src/contexts/auth-context"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/src/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"
import { LogOut, User } from "lucide-react"
import Link from "next/link"
import { ElementType, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/src/store/hooks"
import LogoutModal from "@/src/components"
import { appLogout } from "@/src/store/actions/authaction"
import { logout } from "@/src/store/reducers/authreducer"
import { useToast } from "@/src/hooks/use-toast"
import Header from "../header"
import { educatorNavItems, adminNavItems, studentNavItems } from "@/src/utils/constant"

interface navItemsProps {
  navItems: {
    href: string;
    label: string;
    icon: ElementType
  }[]
}



const HeaderComponent = () => {
  const { user } = useAuth()
  const userr = useAppSelector((state) => state.auth.user)
  const role = userr?.role;
  const router = useRouter()
  const pathname = usePathname();
  const [logOff, setLogOff] = useState(false)
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const handleLogout = () => {
    setLogOff(true);
  }

  const handleConfirm = () => {
    dispatch(logout())
    toast({ title: "LogOut Successfull " })
    router.push("/login")
  }

  const navItems = role == "admin" ? adminNavItems : (role == "educator" ? educatorNavItems : studentNavItems);

  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/educator/dashboard" className="text-xl font-bold">
              Pathfinder
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Button key={item.href} variant={isActive ? "secondary" : "ghost"} size="sm" asChild>
                    <Link href={item.href} className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar>
                  <AvatarImage src={userr?.avatar_path || "/educator-woman.jpg"} alt={user?.name} />
                  <AvatarFallback>{userr?.name?.charAt(0)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{userr?.first_name + " " + userr?.last_name}</p>
                  <p className="text-xs text-muted-foreground">{userr?.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link href={`/${role}/profile`}>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {logOff && <LogoutModal
            open={logOff}
            setOpen={setLogOff}
            onConfirm={handleConfirm}
          />}

        </div>
      </div>
    </nav>
  )
}

export default HeaderComponent;