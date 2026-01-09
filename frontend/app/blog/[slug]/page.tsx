import { blogPosts } from "@/app/blog/blogPosts"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) notFound()

  return (
    <article className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[540px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-5xl mx-auto px-6 pb-16 text-white">
            <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wide text-blue-400">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-6 text-sm text-slate-200">
              <span>{post.date}</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>By Codiq Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">

          {/* ================= MAIN ================= */}
          <div>

            {/* Intro Highlight */}
            <div className="mb-12 p-6 rounded-xl bg-blue-50 border border-blue-100">
              <p className="text-slate-700 font-medium leading-relaxed">
                This article explores key insights, strategies, and best practices
                to help businesses and developers stay ahead in modern digital
                product development.
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 text-black">
              {post.content.split("\n").map((line, i) =>
                line.trim() ? <p key={i}>{line}</p> : null
              )}
            </div>

            {/* Quote Block */}
            <div className="mt-16 p-8 border-l-4 border-blue-600 bg-slate-50 rounded-xl">
              <p className="text-xl font-medium text-slate-800 leading-relaxed">
                “Technology alone is not enough — the real impact comes from
                how intelligently it is applied to solve real-world problems.”
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Key Takeaways
              </h3>

              <ul className="space-y-4 text-slate-700">
                <li>• Focus on performance, scalability, and user experience</li>
                <li>• Use modern frameworks and AI wisely</li>
                <li>• Build solutions aligned with business goals</li>
                <li>• Optimize continuously based on real data</li>
              </ul>
            </div>

            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-3">
              {["Web Development", "AI", "SaaS", "Next.js"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1 rounded-full text-sm bg-slate-100 text-slate-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author */}
            <div className="mt-20 p-8 rounded-2xl border bg-slate-50 flex gap-6 items-center">
              <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                C
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Codiq Solutions
                </p>
                <p className="text-sm text-slate-600 max-w-md">
                  We help startups and enterprises build scalable, secure,
                  and high-performance digital products using modern
                  technologies.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-20 flex justify-between items-center border-t pt-8">
              <Link
                href="/blog"
                className="text-blue-600 font-medium hover:underline"
              >
                ← Back to Blog
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* ================= SIDEBAR ================= */}
          <aside className="hidden lg:block sticky top-32 space-y-8">

            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <h4 className="font-semibold mb-4 text-black">Related Topics</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>• Web Development</li>
                <li>• Artificial Intelligence</li>
                <li>• UI / UX Design</li>
                <li>• SaaS Growth</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-blue-600 text-white">
              <h4 className="font-semibold mb-3">
                Need Expert Help?
              </h4>
              <p className="text-sm text-blue-100 mb-4">
                Let’s turn your idea into a scalable digital product.
              </p>
              <Link
                href="/contact"
                className="inline-block text-sm font-medium underline"
              >
                Contact Us →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </article>
  )
}
