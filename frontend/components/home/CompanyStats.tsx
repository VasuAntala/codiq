"use client"

import { motion } from "framer-motion"

const stats = [
  {
    value: "10+",
    label: "Projects Delivered",
    description: "Successfully completed products across multiple industries.",
  },
  {
    value: "5+",
    label: "Happy Clients",
    description: "Long-term partnerships built on trust and performance.",
  },
  {
    value: "1+",
    label: "Years of Experience",
    description: "Consistent growth and technical excellence.",
  },
  {
    value: "10+",
    label: "Team Members",
    description: "Skilled developers, designers, and engineers.",
  },
]

export default function CompanyStats() {
  return (
    <section className="relative bg-white py-28">
      {/* Soft background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-violet-100 blur-3xl opacity-70" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            Our Impact in Numbers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-slate-600"
          >
            We measure success through real results, strong partnerships,
            and consistently delivering high-quality digital solutions.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid gap-y-16 gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Divider */}
              <div className="absolute -left-5 top-0 hidden h-full w-px bg-slate-200 lg:block" />

              <div className="text-5xl font-extrabold tracking-tight text-slate-900">
                {stat.value}
              </div>

              <div className="mt-3 text-lg font-semibold text-slate-800">
                {stat.label}
              </div>

              <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
