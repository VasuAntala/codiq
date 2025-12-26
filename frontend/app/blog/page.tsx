"use client"

import { PageHeader } from "@/components/PageHeader"
import { motion } from "framer-motion"
import Link from "next/link"

const posts = [
    {
        title: "The Future of AI in Web Development",
        excerpt: "How artificial intelligence is reshaping the way we build and interact with the web.",
        date: "Dec 15, 2025",
        category: "Technology",
        slug: "future-of-ai"
    },
    {
        title: "Optimizing Next.js for Performance",
        excerpt: "Best practices for building lightning-fast applications with the App Router.",
        date: "Dec 10, 2025",
        category: "Development",
        slug: "nextjs-performance"
    },
    {
        title: "Why Your Business Needs a Custom Mobile App",
        excerpt: "Exploring the benefits of native vs cross-platform development for enterprise growth.",
        date: "Nov 28, 2025",
        category: "Business",
        slug: "mobile-app-benefits"
    }
]

export default function BlogPage() {
    return (
        <>
            <PageHeader
                title="Insights & News"
                description="Latest thoughts on technology, design, and digital innovation."
            />

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col bg-white dark:bg-slate-950 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
                            >
                                <div className="h-48 bg-slate-200 dark:bg-slate-800 animate-pulse-slow">
                                    {/* Image placeholder */}
                                </div>
                                <div className="flex-1 p-6 flex flex-col">
                                    <div className="text-sm text-blue-600 font-medium mb-2">{post.category}</div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                        <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 flex-1 mb-4 text-sm line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="text-xs text-slate-500 mt-auto">
                                        {post.date}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
