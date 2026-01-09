import Link from "next/link"
import { PageHeader } from "@/components/PageHeader"

export default function privacy() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="Privacy Policy"
        description="Your privacy is important to us. Learn how we collect, use, and protect your information."
      />

      {/* Content Section */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4">

          {/* Intro */}
          <div className="mb-16">
            <p className="text-lg text-slate-600 leading-relaxed">
              This Privacy Policy explains how <strong>MegaCode Solution</strong> collects,
              uses, discloses, and protects your information when you use our website,
              products, and services.
            </p>
          </div>

          {/* Policy Cards */}
          <div className="space-y-12">

            {/* Section */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may collect personal information such as your name, email address,
                phone number, company details, and any other information you voluntarily
                provide through forms or communications.
              </p>
            </div>

            {/* Section */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To improve website performance and user experience</li>
                <li>To respond to inquiries and support requests</li>
                <li>To send service updates or important notifications</li>
              </ul>
            </div>

            {/* Section */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3. Cookies & Tracking Technologies
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We use cookies and similar technologies to analyze traffic, enhance
                functionality, and personalize content. You can control cookies
                through your browser settings.
              </p>
            </div>

            {/* Section */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                4. Data Security
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We implement industry-standard security measures to protect your data.
                However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            {/* Section */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                5. Third-Party Services
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may use trusted third-party tools for analytics, hosting, or
                communication. These providers are obligated to protect your
                information.
              </p>
            </div>

            {/* Section */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                6. Your Rights
              </h2>
              <p className="text-slate-600 leading-relaxed">
                You have the right to access, update, or request deletion of your
                personal information. Contact us anytime for assistance.
              </p>
            </div>

            {/* Section */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                7. Policy Updates
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this policy from time to time. Changes will be posted
                on this page with a revised date.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-10 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Contact Us
              </h3>
              <p className="text-slate-600 mb-6">
                If you have any questions about this Privacy Policy, feel free to reach out.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
              >
                Contact Support
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
