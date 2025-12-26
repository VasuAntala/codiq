"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-32 md:pt-48 md:pb-48">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] opacity-60 dark:opacity-40" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] opacity-40 mix-blend-multiply dark:mix-blend-screen" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-800 dark:text-blue-300 backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
                        Next-Gen Software & AI Solutions
                        <ChevronRight className="ml-1 h-4 w-4 opacity-50" />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mx-auto max-w-5xl text-6xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-7xl md:text-8xl text-balance leading-[1.1]"
                >
                    Building the Future with <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
                        Code & Intelligence
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-300 text-pretty leading-relaxed"
                >
                    Codiq Solutions delivers premium web development, mobile apps, and cutting-edge AI integration to propel your business forward.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="h-14 px-8 rounded-full text-lg shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 transition-shadow" asChild>
                        <Link href="/contact">
                            Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg border-2" asChild>
                        <Link href="/services">Explore Services</Link>
                    </Button>
                </motion.div>

                {/* Abstract UI Element specific for tech vibe */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 relative mx-auto max-w-5xl"
                >
                    <div className="rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-4 shadow-2xl">
                        <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 overflow-hidden relative border border-slate-200 dark:border-slate-700">
                            {/* Mock UI Representation */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center space-y-4 opacity-50">
                                    <div className="w-24 h-24 rounded-full bg-blue-500/20 mx-auto blur-xl animate-pulse" />
                                    <div className="w-64 h-4 bg-slate-200 dark:bg-slate-700 rounded-lg mx-auto" />
                                    <div className="w-48 h-4 bg-slate-200 dark:bg-slate-700 rounded-lg mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
