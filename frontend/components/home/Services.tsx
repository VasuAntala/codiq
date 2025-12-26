"use client"

import { Code, Smartphone, BarChart, Bot, Server, Globe, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const services = [
    {
        icon: Globe,
        title: "Web Development",
        description: "High-performance, scalable web applications using Next.js and modern frameworks. We build the infrastructure of the future.",
        className: "md:col-span-2",
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        icon: Bot,
        title: "AI & Machine Learning",
        description: "Intelligent solutions integrating NLP, computer vision, and predictive analytics to automate your business.",
        className: "md:col-span-1",
        gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile solutions delivering fluid experiences on iOS and Android.",
        className: "md:col-span-1",
        gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
        icon: Server,
        title: "Custom Software",
        description: "Tailored enterprise software architected to streamline your complex business operations securely.",
        className: "md:col-span-2",
        gradient: "from-orange-500/20 to-amber-500/20"
    },
    {
        icon: Code,
        title: "API Integration",
        description: "Seamless third-party integrations.",
        className: "md:col-span-1",
        gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
        icon: BarChart,
        title: "Digital Marketing",
        description: "Data-driven growth strategies.",
        className: "md:col-span-1",
        gradient: "from-indigo-500/20 to-blue-500/20"
    },
]

export function Services() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/20 -z-10" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-4 text-xl text-slate-600 dark:text-slate-400"
                    >
                        Comprehensive technology solutions engineered for the modern enterprise.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl p-8 transition-all duration-300",
                                "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800",
                                "hover:shadow-2xl hover:border-transparent dark:hover:border-transparent",
                                service.className
                            )}
                        >
                            {/* Hover Gradient Background */}
                            <div className={cn(
                                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                                service.gradient
                            )} />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="mb-6 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-pretty">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <div className="rounded-full p-2 bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-white group-hover:text-black dark:group-hover:text-white transition-colors">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
