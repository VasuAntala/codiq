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
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-slate-50/30" />
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl opacity-60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              Our Track Record
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Our Impact in Numbers
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
              We measure success through real results, strong partnerships,
              and consistently delivering high-quality digital solutions.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-2">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col p-8 rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-600/5 items-center lg:items-start text-center lg:text-left"
            >
              <div className="text-5xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                {stat.value}
              </div>

              <div className="mt-3 text-lg font-bold text-slate-800">
                {stat.label}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {stat.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 h-1 w-8 rounded-full bg-blue-100 group-hover:bg-blue-600 group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  )
}
