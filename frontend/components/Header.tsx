"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Career", href: "/careers" },
  { name: "Products", href: "/products" },
  { name: "Technologies", href: "/technologies" },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-[#001B3D]/95 backdrop-blur shadow-lg"
            : "bg-[#001B3D]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              {/* ICON LOGO */}
              <Image
                src="/Logo.PNG"        // icon logo
                alt="Codiq Icon Logo"
                width={180}
                height={180}
                className="rounded-md"
                priority
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition",
                    pathname === item.href
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full bg-white/10 -z-10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </Link>
              ))}

              {/* CTA */}
              <div className="ml-4">
                <Button
                  asChild
                  className="rounded-full bg-white text-[#001B3D] hover:bg-white/90 shadow"
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>

            {/* MOBILE MENU */}
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="bg-[#001B3D] text-white">
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>

                  <div className="mt-10 flex flex-col gap-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "px-4 py-3 rounded-xl text-base font-medium transition",
                          pathname === item.href
                            ? "bg-white/10 text-white"
                            : "text-white/80 hover:bg-white/10"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}

                    <Button
                      className="mt-4 bg-white text-[#001B3D] hover:bg-white/90"
                      asChild
                    >
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}