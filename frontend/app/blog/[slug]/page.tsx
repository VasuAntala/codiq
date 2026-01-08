import { blogPosts } from "@/app/blog/blogPosts"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) notFound()

  return (
    <article className="bg-white">
      {/* Hero Image */}
      <div className="relative h-[420px] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Meta */}
        <div className="text-sm text-slate-500 mb-4">
          <span className="text-blue-600 font-semibold uppercase">
            {post.category}
          </span>{" "}
          • {post.date}
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-black mb-8">
          {post.title}
        </h1>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-slate-700">
          {post.content.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* Back */}
        <Link
          href="/blog"
          className="inline-block mt-16 text-blue-600 font-medium hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    </article>
  )
}
