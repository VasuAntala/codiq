"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, Code2 } from "lucide-react"
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
  { name: "Products", href: "/products" },
  { name: "Technologies", href: "/technologies" },
  { name: "Contact", href: "/contact" },
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
            ? "bg-white/90 backdrop-blur shadow-md"
            : "bg-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Code2 className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Codiq Solutions
              </span>
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
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full bg-blue-50 -z-10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </Link>
              ))}

              {/* CTA */}
              <div className="ml-4 flex items-center gap-2">
                {/* <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button> */}
                <Button
                  asChild
                  className="rounded-full bg-blue-600 hover:bg-blue-700 shadow"
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>

            {/* MOBILE MENU */}
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white">
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>

                  <div className="mt-8 flex flex-col gap-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "px-4 py-3 rounded-xl text-base font-medium",
                          pathname === item.href
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-700 hover:bg-gray-100"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}

                    <div className="pt-4 space-y-3">
                      {/* <Button variant="outline" className="w-full" asChild>
                        <Link href="/login">Login</Link>
                      </Button> */}
                      <Button className="w-full bg-blue-600" asChild>
                        <Link href="/contact">Get Quote</Link>
                      </Button>
                    </div>
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
