"use client"

import { PageHeader } from "@/components/PageHeader"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CareersPage() {
    return (
        <>
            <PageHeader
                title="Join Our Team"
                description="Build the future with us. We are always looking for talented individuals."
            />

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Open Positions</h2>
                    </div>

                    <div className="space-y-6 max-w-3xl mx-auto">
                        {[
                            { title: "Senior Frontend Developer", dept: "Engineering", type: "Full-time", loc: "Remote" },
                            { title: "Product Designer (UI/UX)", dept: "Design", type: "Full-time", loc: "New York, NY" },
                            { title: "AI Research Engineer", dept: "R&D", type: "Full-time", loc: "San Francisco, CA" }
                        ].map((job, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center justify-between p-6 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors"
                            >
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{job.title}</h3>
                                    <p className="text-sm text-slate-500 mt-1">{job.dept} · {job.type} · {job.loc}</p>
                                </div>
                                <Button variant="outline">Apply Now</Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
