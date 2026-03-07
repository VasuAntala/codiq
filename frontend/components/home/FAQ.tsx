"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
    {
        question: "What industries do you specialize in?",
        answer: "We specialize in Fintech, E-commerce, Healthcare, and AI-driven SaaS platforms. However, our engineering team is versatile and can adapt to any complex business logic."
    },
    {
        question: "How long does a typical project take?",
        answer: "A standard MVP typically takes 6-10 weeks, while enterprise platforms can take 4-6 months depending on requirements and integrations."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Yes, we provide 24/7 priority support and maintenance packages. We act as your long-term technology partner, not just a one-time vendor."
    },
    {
        question: "Can you help rescale an existing application?",
        answer: "Absolutely. We specialize in performance optimization, infrastructure migration (Cloud/AWS/Azure), and refactoring legacy code into modern architectures."
    },
    {
        question: "How do you handle security and data privacy?",
        answer: "We follow industry best practices including SOC2 compliance standards, end-to-end encryption, and rigorous penetration testing for every deployment."
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="bg-slate-50 py-24 md:py-32 overflow-hidden">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-100/50 rounded-full">
                            <HelpCircle className="w-4 h-4" />
                            Frequently Asked Questions
                        </span>
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                            Got Questions? <span className="text-blue-400">We Have Answers.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "group rounded-2xl border transition-all duration-300",
                                openIndex === i
                                    ? "border-blue-200 bg-white shadow-xl shadow-blue-400/5"
                                    : "border-slate-200 bg-white/50 hover:bg-white hover:border-blue-100"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex w-full items-center justify-between p-6 text-left"
                            >
                                <span className={cn(
                                    "text-lg font-semibold transition-colors",
                                    openIndex === i ? "text-blue-400" : "text-slate-900 group-hover:text-blue-400"
                                )}>
                                    {faq.question}
                                </span>
                                <ChevronDown className={cn(
                                    "h-5 w-5 text-slate-400 transition-transform duration-300",
                                    openIndex === i && "rotate-180 text-blue-400"
                                )} />
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="border-t border-slate-100 p-6 pt-2 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
