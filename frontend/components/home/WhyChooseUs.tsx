"use client"

import { motion } from "framer-motion"
import {
  ShieldCheck,
  Rocket,
  Users,
  Code2,
  Clock,
  TrendingUp,
} from "lucide-react"

type Feature = {
  icon: React.ElementType
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description:
      "We build future-ready applications designed to scale with your business growth.",
  },
  {
    icon: Code2,
    title: "Clean & Modern Code",
    description:
      "Industry best practices, optimized performance, and maintainable codebases.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "We collaborate closely with clients to deliver solutions aligned with real needs.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Strong focus on data protection, secure authentication, and safe transactions.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Agile development process ensures timely delivery without compromising quality.",
  },
  {
    icon: TrendingUp,
    title: "Business-Driven Results",
    description:
      "Technology solutions crafted to improve efficiency, revenue, and user experience.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-50 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-indigo-50/50 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-16 md:mb-20 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              The Codiq Edge
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Why Choose Us
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              We combine technology, strategy, and creativity to deliver reliable
              digital solutions that create real business value.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl border border-slate-100 bg-white p-8 md:p-10 transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-600/5"
            >
              {/* Icon */}
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-3 group-hover:scale-110">
                <item.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="mb-4 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              <p className="leading-relaxed text-slate-600 text-sm lg:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  )
}
