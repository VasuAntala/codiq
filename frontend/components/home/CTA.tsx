"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-blue-50 py-28">
      {/* Subtle background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-violet-100 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
        >
          Let’s Build Something
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Remarkable Together
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-600"
        >
          From idea to deployment, we design and engineer scalable digital
          solutions that help businesses grow faster.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Button
            size="lg"
            className="h-14 rounded-full px-8 text-base 
             bg-[var(--primary)] 
             text-white 
             hover:bg-[var(--primary-hover)]
             shadow-lg shadow-blue-600/20"
            asChild
          >
            <Link href="/contact">
              Start a Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 text-sm text-slate-500"
        >
          Trusted by startups, founders, and growing businesses worldwide
        </motion.p>
      </div>
    </section>
  )
}
