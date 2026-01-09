import Link from "next/link"
import { PageHeader } from "@/components/PageHeader"

export default function CookiePolicyPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="Cookie Policy"
        description="Learn how we use cookies to improve your experience on our website."
      />

      {/* Content Section */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4">

          {/* Intro */}
          <div className="mb-16">
            <p className="text-lg text-slate-600 leading-relaxed">
              This Cookie Policy explains how <strong>Codiq IT Solution</strong>{" "}
              uses cookies and similar technologies to recognize you when you
              visit our website. It explains what these technologies are and why
              we use them.
            </p>
          </div>

          {/* Cookie Sections */}
          <div className="space-y-12">

            {/* 1 */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                1. What Are Cookies?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Cookies are small data files stored on your device when you visit
                a website. They help websites function efficiently and provide
                reporting information.
              </p>
            </div>

            {/* 2 */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2. Why We Use Cookies
              </h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>To ensure proper website functionality</li>
                <li>To improve performance and security</li>
                <li>To analyze traffic and user behavior</li>
                <li>To personalize content and user experience</li>
              </ul>
            </div>

            {/* 3 */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3. Types of Cookies We Use
              </h2>

              <div className="space-y-4 text-slate-600">
                <p>
                  <strong>Essential Cookies:</strong> Required for core website
                  functionality and security.
                </p>
                <p>
                  <strong>Performance Cookies:</strong> Help us understand how
                  visitors interact with our website.
                </p>
                <p>
                  <strong>Functional Cookies:</strong> Remember your preferences
                  to enhance usability.
                </p>
                <p>
                  <strong>Analytics Cookies:</strong> Used to track website usage
                  and improve our services.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                4. Third-Party Cookies
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may use third-party services such as analytics tools that place
                cookies on your device to collect usage statistics and improve
                our services.
              </p>
            </div>

            {/* 5 */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                5. Managing Cookies
              </h2>
              <p className="text-slate-600 leading-relaxed">
                You can control or delete cookies through your browser settings.
                Please note that disabling certain cookies may impact website
                functionality.
              </p>
            </div>

            {/* 6 */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                6. Updates to This Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Cookie Policy periodically to reflect changes
                in technology, law, or our practices.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-10 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Need More Information?
              </h3>
              <p className="text-slate-600 mb-6">
                If you have questions about our use of cookies, feel free to
                contact us.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
