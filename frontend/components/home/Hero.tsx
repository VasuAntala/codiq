"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const texts = ["Full Stack Development", "Graphics Design", "Digital Marketing", "AI Solutions"]
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentFullText.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 30 : 70)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts])

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-24 md:pt-32 md:pb-40 px-4">
      {/* Premium Background Layering */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated Primary Blobs */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-blue-400/10 blur-[130px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 50, 0],
            y: [0, 80, -60, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] h-[700px] w-[700px] rounded-full bg-indigo-400/10 blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, 40, -80, 0],
            y: [0, 60, 40, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[30%] h-[500px] w-[500px] rounded-full bg-violet-400/10 blur-[120px]"
        />

        {/* Subtle Mesh Grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/50 backdrop-blur-sm px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-700 shadow-sm transition-all hover:bg-blue-100/50">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            Trusted IT & Software Solutions
            <ChevronRight className="h-4 w-4 opacity-60" />
          </div>
        </motion.div>

        {/* Dynamic Heading */}
        <div className="min-h-[140px] sm:min-h-[160px] md:min-h-[180px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2"
          >
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Next-Gen <br className="sm:hidden" />
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent px-2">
                {currentText}
              </span>
              <span className="inline-block w-[2px] h-[0.8em] bg-blue-600 ml-1 animate-caret" />
            </h1>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Products That Scale
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed px-2"
        >
          We build high-performance web platforms, mobile applications, and
          AI-powered systems for startups and enterprises worldwide.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto h-14 rounded-2xl px-10 text-base font-semibold transition-all duration-300
             bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98]
             shadow-xl shadow-blue-600/25"
            asChild
          >
            <Link href="/contact">
              Start a Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto h-14 rounded-2xl px-10 text-base font-semibold transition-all duration-300
             border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.02] active:scale-[0.98]"
            asChild
          >
            <Link href="/services">Our Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
