"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Cpu, Network } from "lucide-react"

export function Vision() {
    return (
        <section className="py-32 relative overflow-hidden bg-slate-950 text-white">
            {/* Mesh Gradients */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/30 rounded-full blur-[120px]" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center space-x-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 mb-6"
                        >
                            <BrainCircuit className="h-4 w-4" />
                            <span>Visionary Intelligence</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight"
                        >
                            We don't just build software. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                We engineer intelligence.
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-slate-300 leading-relaxed mb-8 text-pretty"
                        >
                            Our vision extends beyond traditional development into the realm of Artificial Intelligence. We are actively expanding our capabilities to deliver AI-driven products that automate processes, generate insights, and redefine user experiences.
                        </motion.p>

                        <div className="grid grid-cols-2 gap-6">
                            <Feature
                                icon={Cpu}
                                title="Neural Architectures"
                                desc="Building adaptive systems that learn and evolve."
                                delay={0.3}
                            />
                            <Feature
                                icon={Network}
                                title="Connected Ecosystems"
                                desc="Seamlessly integrating AI into your existing stack."
                                delay={0.4}
                            />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),transparent_70%)]" />

                            {/* Abstract Decorative Elements representing AI */}
                            <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-70">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-1 bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0 h-32 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                                ))}
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-48 h-48 rounded-full border border-blue-500/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                    <div className="w-32 h-32 rounded-full border border-indigo-500/30 border-dashed" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function Feature({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="p-4 rounded-xl bg-slate-900/50 border border-slate-800"
        >
            <Icon className="h-6 w-6 text-blue-400 mb-2" />
            <h3 className="font-semibold text-white mb-1">{title}</h3>
            <p className="text-sm text-slate-400">{desc}</p>
        </motion.div>
    )
}
