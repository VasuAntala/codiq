"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Technologies", href: "/technologies" },
    { name: "About", href: "/about" },
]

export function Navbar() {
    const [scrolled, setScrolled] = React.useState(false)
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
            <nav
                className={cn(
                    "w-full max-w-7xl rounded-2xl transition-all duration-300 mx-auto",
                    scrolled ? "glass-nav shadow-lg py-2" : "bg-transparent py-4"
                )}
            >
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-2 group">
                                <div className="p-2 rounded-xl bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors">
                                    <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                                    Codiq
                                </span>
                            </Link>
                        </div>

                        <div className="hidden md:block">
                            <div className="flex items-center space-x-1">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "relative px-4 py-2 text-sm font-medium rounded-full transition-colors overflow-hidden group",
                                            pathname === item.href
                                                ? "text-blue-600 dark:text-blue-400"
                                                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                                        )}
                                    >
                                        <span className="relative z-10">{item.name}</span>
                                        {pathname === item.href && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-full z-0"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </Link>
                                ))}
                                <div className="pl-4 flex items-center space-x-2">
                                    <Button variant="ghost" asChild className="rounded-full">
                                        <Link href="/login">Log In</Link>
                                    </Button>
                                    <Button asChild className="rounded-full shadow-lg hover:shadow-blue-500/20 shadow-blue-500/10">
                                        <Link href="/signup">Sign Up</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="md:hidden">
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="text-slate-700 dark:text-slate-200">
                                        <Menu className="h-6 w-6" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="glass-nav border-l border-slate-200/50 dark:border-slate-800/50">
                                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                                    <div className="flex flex-col space-y-4 mt-8">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={cn(
                                                    "px-4 py-3 rounded-xl text-lg font-medium transition-colors",
                                                    pathname === item.href
                                                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                                                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                        <div className="pt-4 px-2 space-y-3">
                                            <Button variant="outline" className="w-full rounded-xl border-slate-200 dark:border-slate-800" asChild onClick={() => setIsOpen(false)}>
                                                <Link href="/login">Log In</Link>
                                            </Button>
                                            <Button className="w-full rounded-xl shadow-lg shadow-blue-500/20" size="lg" asChild onClick={() => setIsOpen(false)}>
                                                <Link href="/signup">Sign Up</Link>
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
