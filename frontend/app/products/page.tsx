"use client"

import { PageHeader } from "@/components/PageHeader"
import { motion } from "framer-motion"
import { Bot, Zap, Shield, Sparkles } from "lucide-react"

export default function ProductsPage() {
    return (
        <>
            <PageHeader
                title="Our Products"
                description="Innovative software products designed to solve complex business challenges."
            />

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-12">Current Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="premium-card p-8 group"
                        >
                            <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                                <Shield className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">SecureGuard</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Enterprise-grade security management platform for small businesses. Protect your digital assets with real-time monitoring.
                            </p>
                            <span className="inline-flex items-center text-sm font-medium text-green-600">Available Now</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="premium-card p-8 group"
                        >
                            <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">FlowSync</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Workflow automation tool that connects your favorite apps. Streamline your operations without writing code.
                            </p>
                            <span className="inline-flex items-center text-sm font-medium text-purple-600">Available Now</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-slate-900 to-slate-900" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex items-center mb-12">
                        <Sparkles className="h-8 w-8 text-blue-400 mr-4" />
                        <h2 className="text-3xl font-bold tracking-tight">Future AI Roadmap</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "CodiqAI Assistant", desc: "Context-aware coding assistant for enterprise specialized domains." },
                            { title: "VisionExtract", desc: "Automated document processing using advanced Computer Vision." },
                            { title: "PredictiveSales", desc: "AI-driven sales forecasting engine for e-commerce." }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
                            >
                                <Bot className="h-6 w-6 text-blue-400 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                                <div className="mt-4 inline-flex px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-300">Coming 2026</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
