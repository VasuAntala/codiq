"use client"

import { motion } from "framer-motion"
import { BrainCircuit, ShieldCheck, Layers3, Zap } from "lucide-react"

export function Approach() {
    return (
        <section className="bg-blue-50 py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Left content */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600"
                        >
                            Our Approach
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900"
                        >
                            We solve real problems -
                            <br />
                            not just ship features.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="max-w-xl text-lg leading-relaxed text-slate-600"
                        >
                            Technology should simplify complexity, not add to it.
                            Our process is built around clarity, performance, and
                            long-term scalability - so what we build today still
                            works tomorrow.
                        </motion.p>
                    </div>

                    {/* Principles */}
                    <div className="grid gap-6 sm:grid-cols-2">
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
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
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
