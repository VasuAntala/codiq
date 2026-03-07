"use client"

import { motion } from "framer-motion"
import {
  Atom,
  Server,
  Database,
  CreditCard,
  Cloud,
  ShieldCheck,
} from "lucide-react"

const techStack = [
  {
    icon: Atom,
    title: "Frontend Engineering",
    tech: "React.js",
    desc: "Component-driven UI, responsive layouts, and scalable frontend architecture.",
  },
  {
    icon: Server,
    title: "Backend Systems",
    tech: "Node.js • Express.js",
    desc: "Secure APIs, business logic handling, and high-performance server-side development.",
  },
  {
    icon: Database,
    title: "Data Layer",
    tech: "MongoDB • Firebase",
    desc: "Flexible schemas, real-time data sync, and scalable database solutions.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    tech: "Razorpay",
    desc: "Secure checkout, order confirmation, and transaction handling.",
  },
  {
    icon: Cloud,
    title: "Deployment",
    tech: "Cloud Hosting",
    desc: "Production-ready deployments with performance optimization.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Optimization",
    tech: "Auth • Validation",
    desc: "Authentication, authorization, and performance tuning.",
  },
]

export default function TechnologiesWeUse() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-start">
          {/* LEFT CONTENT */}
          <div className="lg:sticky lg:top-32 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-100/50 rounded-full">
                Our Tech Stack
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Built with Modern <br className="hidden lg:block" /> Engineering
              </h2>

              <p className="mt-8 max-w-md text-base sm:text-lg leading-relaxed text-slate-600 mx-auto lg:mx-0">
                We don’t chase trends. We use proven, modern technologies that
                ensure performance, security, and long-term scalability for
                real-world products.
              </p>

              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3">
                {["Production-ready", "Scalable", "Secure"].map((tag) => (
                  <span key={tag} className="px-5 py-2 rounded-full border border-blue-200 bg-white text-xs font-bold text-blue-500 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT STACK */}
          <div className="grid gap-4 sm:gap-6">
            {techStack.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group relative flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-400/5"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-700 transition-all duration-500 group-hover:bg-blue-400 group-hover:text-white group-hover:rotate-3">
                  <item.icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-400">
                      {item.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[10px] font-bold text-blue-400 uppercase tracking-widest border border-blue-100">
                      {item.tech}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

  )
}
