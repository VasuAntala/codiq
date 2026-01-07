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
    <section className="relative bg-blue-50 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="lg:sticky lg:top-32 h-fit">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
            >
              Our Technology Stack
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-md text-lg leading-relaxed text-slate-600"
            >
              We don’t chase trends. We use proven, modern technologies that
              ensure performance, security, and long-term scalability for
              real-world products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700"
            >
              Production-ready • Scalable • Secure
            </motion.div>
          </div>

          {/* RIGHT STACK */}
          <div className="space-y-6">
            {techStack.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative flex gap-6 border-l-2 border-slate-200 py-6 pl-6 transition-colors hover:border-blue-500"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-blue-600">
                    {item.tech}
                  </p>
                  <p className="mt-2 max-w-xl text-slate-600">
                    {item.desc}
                  </p>
                </div>

                {/* Hover indicator */}
                <span className="absolute left-[-6px] top-10 h-3 w-3 rounded-full bg-slate-300 transition-all group-hover:scale-125 group-hover:bg-blue-600" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
