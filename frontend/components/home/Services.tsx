"use client"

import {
    Code,
    Smartphone,
    BarChart,
    Bot,
    Server,
    Globe,
    ArrowUpRight,
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

const services = [
    {
        icon: Globe,
        title: "Web Platforms",
        description:
            "Next-gen web systems engineered with performance-first architecture and scalable design.",
        accent: "from-blue-500 to-cyan-500",
    },
    {
        icon: Bot,
        title: "AI Automation",
        description:
            "AI-powered workflows and intelligent systems that optimize operations and reduce cost.",
        accent: "from-violet-500 to-fuchsia-500",
    },
    {
        icon: Smartphone,
        title: "Mobile Experiences",
        description:
            "Pixel-perfect mobile applications delivering speed, usability, and reliability.",
        accent: "from-emerald-500 to-teal-500",
    },
    {
        icon: Server,
        title: "Custom Software",
        description:
            "Secure, enterprise-grade software tailored to complex business logic.",
        accent: "from-orange-500 to-amber-500",
    },
    {
        icon: Code,
        title: "API Engineering",
        description:
            "Robust APIs and integrations powering seamless communication between systems.",
        accent: "from-pink-500 to-rose-500",
    },
    {
        icon: BarChart,
        title: "Data Intelligence",
        description:
            "Advanced analytics and dashboards that turn data into actionable insight.",
        accent: "from-indigo-500 to-violet-500",
    },
]

export default function Services() {
    return (
        <section className="relative overflow-hidden bg-white py-24 md:py-32">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 bg-slate-50/50" />
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* Header */}
                <div className="mx-auto mb-16 md:mb-20 max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-50 rounded-full">
                            Our Expertise
                        </span>
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Solutions Designed to Scale
                        </h2>
                        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            We help businesses build future-ready digital products through
                            cutting-edge technology and thoughtful engineering.
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative flex flex-col items-start rounded-3xl border border-slate-200 bg-white p-8 md:p-10 transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-400/10"
                        >
                            {/* Icon Wrapper */}
                            <div
                                className={cn(
                                    "mb-8 flex h-16 w-16 items-center justify-center rounded-2xl",
                                    "bg-slate-50 text-slate-900",
                                    "transition-all duration-500",
                                    "group-hover:scale-110 group-hover:rotate-3 group-hover:bg-blue-400 group-hover:text-white"
                                )}
                            >
                                <service.icon className="h-7 w-7 transition-all" />
                            </div>

                            <h3 className="mb-4 text-2xl font-bold text-slate-900 group-hover:text-blue-400 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                                {service.description}
                            </p>

                            {/* Decorative bar on hover */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-400 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-3xl" />

                            {/* CTA Link */}
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all hover:gap-3"
                            >
                                Explore Service
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
