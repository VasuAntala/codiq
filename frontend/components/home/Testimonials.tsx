"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

type Testimonial = {
  name: string
  role: string
  company?: string
  feedback: string
}

const testimonials: Testimonial[] = [
  {
    name: "Ankit Pansuriya",
    role: "Founder",
    company: "AIMAVEN Solution",
    feedback:
      "The team delivered a scalable, secure, and performance-driven solution. Their technical expertise and communication were exceptional throughout the project.",
  },
  {
    name: "Riya Mehta",
    role: "Product User",
    feedback:
      "The jewellery platform is smooth, fast, and very easy to use. Wishlist and checkout experience feels premium and seamless.",
  },
  {
    name: "Kunal Shah",
    role: "E-commerce Client",
    company: "Retail Brand",
    feedback:
      "Admin dashboard, order handling, and Razorpay integration were perfectly executed. The system works flawlessly.",
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-blue-50 py-28">
      {/* Soft accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-20 h-[350px] w-[350px] rounded-full bg-blue-100 blur-3xl opacity-50" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            What Our Clients & Users Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-slate-600"
          >
            Real feedback from businesses and users who trust our solutions.
          </motion.p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-16 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="relative"
            >
              {/* Quote Icon */}
              <Quote className="mb-6 h-10 w-10 text-blue-600/30" />

              {/* Feedback */}
              <p className="mb-8 text-lg leading-relaxed text-slate-700">
                “{item.feedback}”
              </p>

              {/* Author */}
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">
                  {item.role}
                  {item.company && ` • ${item.company}`}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
