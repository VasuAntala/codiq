"use client"

import { PageHeader } from "@/components/PageHeader"
import { motion } from "framer-motion"

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="About Codiq Solutions"
                description="We are a team of visionary developers, designers, and strategists committed to redefining the digital landscape."
            />

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">Who We Are</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                                Founded with a mission to bridge the gap between complex technology and business needs, Codiq Solutions has grown into a premier software development firm. We believe in the power of code to solve real-world problems and creating interfaces that delight users.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                Our approach is simple: listen, innovate, and deliver. We partner with our clients to understand their unique challenges and craft bespoke solutions that drive growth and efficiency.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800"
                        >
                            {/* Placeholder for an image */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                <span className="text-sm">Team Image / Office Shot</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white text-center mb-16">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Innovation", desc: "We constantly push boundaries and embrace new technologies." },
                            { title: "Integrity", desc: "We build trust through transparency and honest results." },
                            { title: "Excellence", desc: "We deliver pixel-perfect code and exceptional user experiences." }
                        ].map((value, idx) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800"
                            >
                                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
