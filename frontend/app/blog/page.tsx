"use client"

import { blogPosts } from "@/app/blog/blogPosts"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/PageHeader"

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Insights & News"
        description="Expert thoughts on technology, design, and digital innovation."
      />

      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl transition"
              >
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 uppercase">
                    {post.category}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-black hover:text-blue-600 transition-colors">

                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex justify-between text-xs text-slate-500">
                    <span>{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Read More →
                    </Link>
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
