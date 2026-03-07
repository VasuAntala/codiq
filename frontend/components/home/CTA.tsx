"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
      {/* Premium Dark Background Accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-blue-400/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute -bottom-[20%] -right-[10%] h-[700px] w-[700px] rounded-full bg-indigo-600/20 blur-[140px]"
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8 inline-block rounded-full bg-white/5 border border-white/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-400 backdrop-blur-md"
        >
          Ready to Start?
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Let’s Build Something
          <br className="hidden sm:block" />
          <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent px-2">
            Remarkable Together
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed"
        >
          From idea to deployment, we design and engineer scalable digital
          solutions that help businesses grow faster.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <Button
            size="lg"
            className="h-16 rounded-2xl px-12 text-lg font-bold transition-all duration-300
             bg-white text-slate-900 
             hover:bg-blue-50 hover:scale-105 active:scale-95
             shadow-2xl shadow-blue-500/20"
            asChild
          >
            <Link href="/contact">
              Start a Project <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-sm text-slate-400"
        >
          Trusted by startups, founders, and growing businesses worldwide
        </motion.p>
      </div>
    </section>

  )
}
