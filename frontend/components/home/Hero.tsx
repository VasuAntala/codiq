"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const texts = ["Full Stack Development", "Graphics Design", "Digital Marketing"]
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
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts])

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-36">
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[900px] rounded-full bg-linear-to-r from-blue-100 via-indigo-100 to-violet-100 blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[600px] bg-blue-100/40 blur-3xl" />
      </div>

      {/* Animated Blur Circle Behind Text */}
      <motion.div
        className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 15, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-[300px] w-[300px] rounded-full blur-3xl" style={{ backgroundColor: "#1D4ED8" }} />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            Trusted IT & Software Solutions
            <ChevronRight className="h-4 w-4 opacity-60" />
          </div>
        </motion.div>

        {/* Heading */}
        {/* Typewriter Text */}
        <div className="relative inline-block">
            <motion.h1
              className="mx-auto max-w-5xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-6xl"
            >
              <span className="bg-linear-to-r from-[#000B58] via-[#003161] to-indigo-800 bg-clip-text text-transparent">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
            </motion.h1>
          </div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mx-auto max-w-5xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
        >
          <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Products That Scale
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl"
        >
          <p className="text-lg text-slate-600 mb-4">
            We build high-performance web platforms, mobile applications, and
            AI-powered systems for startups and enterprises worldwide.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button
            size="lg"
            className="h-14 rounded-full px-8 text-base 
             bg-(--primary) 
             text-white 
             hover:bg-(--primary-hover)
             shadow-lg shadow-blue-600/20"
            asChild
          >
            <Link href="/contact">
              Start a Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-14 rounded-full px-8 text-base
             border-(--primary)
             text-(--primary)
             hover:bg-(--primary-light)"
            asChild
          >
            <Link href="/services">Our Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
