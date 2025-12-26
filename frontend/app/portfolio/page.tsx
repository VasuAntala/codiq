"use client"

import { PageHeader } from "@/components/PageHeader"
import { motion } from "framer-motion"

export default function PortfolioPage() {
    return (
        <>
            <PageHeader
                title="Our Work"
                description="Case studies and success stories from our partnership with industry leaders."
            />

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2, 3, 4].map((item) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="group relative aspect-[4/3] bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden cursor-pointer"
                            >
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 group-hover:bg-slate-900/10 transition-colors">
                                    Project {item} Preview
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                    <h3 className="text-xl font-bold">Project Name</h3>
                                    <p className="text-sm text-slate-200">Web Development</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
