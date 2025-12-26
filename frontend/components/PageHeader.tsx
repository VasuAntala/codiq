"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
    title: string
    description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <div className="bg-slate-50 dark:bg-slate-900/50 py-20 pb-24 text-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                >
                    {description}
                </motion.p>
            </div>
        </div>
    )
}
