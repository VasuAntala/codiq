"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function CTA() {
    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="mx-auto max-w-4xl px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
                >
                    Ready to Transform Your Digital Presence?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-4 text-lg text-slate-600 dark:text-slate-400"
                >
                    Let's discuss how we can help you build scalable, future-ready solutions.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-10"
                >
                    <Button size="lg" className="px-8 h-12 text-base" asChild>
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
