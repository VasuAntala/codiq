"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Career", href: "/careers" },
  { name: "Products", href: "/products" },
  { name: "Technologies", href: "/technologies" },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close sidebar on route change
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <nav
          className={cn(
            "transition-all duration-500 ease-in-out",
            scrolled
              ? "bg-[#001B3D]/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-b border-white/10"
              : "bg-transparent"
          )}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-20 flex items-center justify-between">
              {/* LOGO */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <Link href="/" className="group">
                  <Image
                    src="/Logo.PNG"
                    alt="Codiq Icon Logo"
                    width={160}
                    height={160}
                    className="rounded-md transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </Link>
              </motion.div>

              {/* DESKTOP MENU */}
              <div className="hidden md:flex items-center gap-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
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
                          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-6"
                >
                  <Button
                    asChild
                    className="rounded-full bg-white text-[#001B3D] hover:bg-white/90 shadow-xl px-8 transition-all duration-300"
                  >
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </motion.div>
              </div>

              {/* MOBILE MENU TOGGLE */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white hover:bg-white/10 transition-colors"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[400px] bg-[#001B3D] shadow-2xl z-[60] md:hidden flex flex-col p-8 border-l border-white/10"
            >
              <div className="flex items-center justify-between mb-12">
                <Image
                  src="/Logo.PNG"
                  alt="Logo"
                  width={120}
                  height={120}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <div className="flex flex-col gap-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-4 rounded-2xl text-lg font-medium transition-all duration-300",
                        pathname === item.href
                          ? "bg-white/10 text-white translate-x-2"
                          : "text-white/70 hover:bg-white/5 hover:text-white hover:translate-x-2"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <Button
                  className="w-full bg-white text-[#001B3D] hover:bg-white/90 rounded-2xl py-6 text-lg font-semibold"
                  asChild
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
