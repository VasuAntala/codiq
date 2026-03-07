"use client"

import { PageHeader } from "@/components/PageHeader"
import { motion } from "framer-motion"
import {
  Globe,
  Smartphone,
  Search,
  Server,
  Database,
  Palette,
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "High-performance, SEO-optimized websites using modern frameworks like React and Next.js to build fast, secure, and scalable web solutions.",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description:
      "Custom mobile and web applications designed for performance, usability, and scalability across all platforms.",
  },
  {
    icon: Palette,
    title: "Graphics Design",
    description:
      "Creative UI/UX design, branding, and visual assets that enhance user experience and strengthen brand identity.",
  },
  {
    icon: Search,
    title: "Digital Marketing",
    description:
      "SEO, performance marketing, and growth strategies to increase online visibility and customer engagement.",
  },
  {
    icon: Server,
    title: "Custom Software",
    description:
      "Tailor-made software solutions including ERP systems, dashboards, and internal tools aligned with business goals.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Secure and scalable database design using MongoDB, PostgreSQL, and cloud-based data solutions.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Professional technology services designed to support business growth and digital transformation."
      />

      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-400">
                  <service.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
