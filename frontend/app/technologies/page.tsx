"use client"

import { PageHeader } from "@/components/PageHeader"
import { motion } from "framer-motion"

const stack = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    Backend: ["Node.js", "Express", "NestJS", "Python", "Django", "Go"],
    Database: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Prisma"],
    "AI & ML": ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "Scikit-learn"],
    "Cloud & DevOps": ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
}

export default function TechnologiesPage() {
    return (
        <>
            <PageHeader
                title="Our Tech Stack"
                description="We utilize the latest and most robust technologies to build scalable solutions."
            />

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {Object.entries(stack).map(([category, techs], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 border-l-4 border-blue-600 pl-4">
                                    {category}
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {techs.map((tech) => (
                                        <div
                                            key={tech}
                                            className="flex items-center justify-center p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500 transition-colors"
                                        >
                                            <span className="font-medium text-slate-700 dark:text-slate-300">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
