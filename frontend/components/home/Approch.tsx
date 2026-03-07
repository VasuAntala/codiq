"use client"

import { motion } from "framer-motion"
import { BrainCircuit, ShieldCheck, Layers3, Zap } from "lucide-react"

export function Approach() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-1/4 left-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />
                <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-indigo-100/30 blur-3xl shadow-2xl" />
            </div>

            <div className="mx-auto max-max-w-7xl px-4 sm:px-6">
                <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
                    {/* Left content */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-500"
                        >
                            Our Approach
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
                        >
                            We solve real problems -
                            <br className="hidden sm:block" />
                            not just ship features.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mx-auto lg:mx-0 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 mb-8"
                        >
                            Technology should simplify complexity, not add to it.
                            Our process is built around clarity, performance, and
                            long-term scalability - so what we build today still
                            works tomorrow.
                        </motion.p>
                    </div>

                    {/* Principles */}
                    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 px-2 sm:px-0">
                        <Principle
                            icon={BrainCircuit}
                            title="Think Before We Build"
                            desc="We deeply understand the problem before writing a single line of code."
                            delay={0.1}
                        />
                        <Principle
                            icon={Layers3}
                            title="Built to Scale"
                            desc="Architecture designed for growth, not rewrites."
                            delay={0.2}
                        />
                        <Principle
                            icon={ShieldCheck}
                            title="Security First"
                            desc="Enterprise-grade practices baked in from day one."
                            delay={0.3}
                        />
                        <Principle
                            icon={Zap}
                            title="Performance Matters"
                            desc="Fast systems create better user experiences and business results."
                            delay={0.4}
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}

function Principle({
    icon: Icon,
    title,
    desc,
    delay,
}: {
    icon: any
    title: string
    desc: string
    delay: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg"
        >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-400 transition-all group-hover:bg-blue-400 group-hover:text-white">
                <Icon className="h-5 w-5" />
            </div>

            <h3 className="mb-2 font-semibold text-slate-900">
                {title}
            </h3>

            <p className="text-sm leading-relaxed text-slate-600">
                {desc}
            </p>
        </motion.div>
    )
}
