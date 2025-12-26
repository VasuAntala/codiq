"use client"

import { PageHeader } from "@/components/PageHeader"
import { motion } from "framer-motion"
import { Code, Smartphone, BarChart, Bot, Server, Globe, Search, Database } from "lucide-react"

const services = [
    {
        icon: Globe,
        title: "Web Development",
        description: "Full-stack web applications using Next.js, React, and Node.js. We build responsive, accessible, and high-performance websites that convert.",
    },
    {
        icon: Smartphone,
        title: "Mobile Application Development",
        description: "Native (iOS/Android) and Cross-platform (React Native/Flutter) mobile apps. We create seamless mobile experiences for your customers.",
    },
    {
        icon: Bot,
        title: "AI & Machine Learning",
        description: "Custom AI models, Chatbots, and Predictive Analytics. Leverage the power of Artificial Intelligence to automate tasks and gain insights.",
    },
    {
        icon: Search,
        title: "SEO & Performance Optimization",
        description: "Technical SEO, Core Web Vitals optimization, and content strategy to improve your visibility and ranking on search engines.",
    },
    {
        icon: Server,
        title: "Custom Software Solutions",
        description: "Tailor-made software to address specific business problems. From ERP systems to internal tools, we build what you need.",
    },
    {
        icon: Database,
        title: "Database Architecture",
        description: "Scalable database design and management using PostgreSQL, MongoDB, and Redis. Ensure your data is secure and accessible.",
    },
]

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                title="Our Services"
                description="End-to-end technology services designed to scale with your business."
            />

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="premium-card p-8"
                            >
                                <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
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
