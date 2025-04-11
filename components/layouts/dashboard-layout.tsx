"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, Home, LogOut, Menu, Settings, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: Home,
    },
    {
      href: "/invoices",
      label: "Invoices",
      icon: FileText,
    },
    {
      href: "/clients",
      label: "Clients",
      icon: Users,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 border-r bg-white md:flex md:flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <FileText className="h-5 w-5 text-primary" />
            <span>Invoice Manager</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <ul className="grid gap-1 px-2">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                    pathname === route.href
                      ? "bg-primary/10 text-primary"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-900",
                  )}
                >
                  <route.icon className="h-4 w-4" />
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 text-sm">
              <div className="font-medium">Aniruddha Adak</div>
              <div className="text-xs text-gray-500">aniruddhadak80@gmail.com</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Navigation */}
      <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-14 items-center border-b px-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 font-semibold"
              onClick={() => setIsMobileNavOpen(false)}
            >
              <FileText className="h-5 w-5 text-primary" />
              <span>Invoice Manager</span>
            </Link>
          </div>
          <nav className="grid gap-1 p-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setIsMobileNavOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                  pathname === route.href
                    ? "bg-primary/10 text-primary"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900",
                )}
              >
                <route.icon className="h-4 w-4" />
                {route.label}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-4 left-4 right-4 border-t pt-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5 text-sm">
                <div className="font-medium">Aniruddha Adak</div>
                <div className="text-xs text-gray-500">aniruddhadak80@gmail.com</div>
              </div>
            </div>
          </div>
        </SheetContent>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMobileNavOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="flex h-14 items-center gap-4 border-b bg-white px-4 md:h-16 md:px-6">
          <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMobileNavOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
          </div>
        </div>
        <div className="p-4 md:p-6">{children}</div>
      </main>
    </div>
  )
}
