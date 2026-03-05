"use client"

import { motion } from "framer-motion"
import {
  Landmark,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Truck,
  Rocket,
} from "lucide-react"

const industries = [
  {
    icon: Landmark,
    title: "FinTech",
    focus: "Security, compliance, real-time processing",
    solution:
      "Payment systems, dashboards, risk monitoring, scalable financial platforms.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    focus: "Data privacy, accuracy, reliability",
    solution:
      "Patient portals, healthcare dashboards, analytics & secure data systems.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    focus: "Engagement, accessibility, scalability",
    solution:
      "Learning platforms, admin portals, performance tracking systems.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    focus: "Performance, conversion, automation",
    solution:
      "Custom stores, admin panels, payment flows & analytics systems.",
  },
  {
    icon: Truck,
    title: "Logistics",
    focus: "Tracking, optimization, operations",
    solution:
      "Supply chain dashboards, tracking tools & workflow automation.",
  },
  {
    icon: Rocket,
    title: "Startups",
    focus: "Speed, validation, growth",
    solution:
      "MVPs, scalable architectures & rapid product iterations.",
  },
]

export default function IndustriesWeServe() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Industries We Serve
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0"
          >
            Our experience spans multiple industries, allowing us to design
            scalable systems that solve real business challenges.
          </motion.p>
        </div>

        {/* Matrix */}
        <div className="space-y-4">
          {industries.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 10 }}
              className="group relative grid gap-6 p-6 sm:p-8 rounded-3xl border border-slate-100 bg-slate-50/50 transition-all duration-300 hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/5 md:grid-cols-[240px_1fr_1fr]"
            >
              {/* Industry */}
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
              </div>

              {/* Focus */}
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600/60 mb-2">
                  Key Focus
                </span>
                <p className="text-slate-700 font-medium">
                  {item.focus}
                </p>
              </div>

              {/* Solution */}
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600/60 mb-2">
                  Specialized Solutions
                </span>
                <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                  {item.solution}
                </p>
              </div>

              {/* Arrow Decoration */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <Rocket className="h-4 w-4 text-blue-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  )
}
