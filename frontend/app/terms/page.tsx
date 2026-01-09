import Link from "next/link"
import { PageHeader } from "@/components/PageHeader"

export default function TermsConditionsPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="Terms & Conditions"
        description="Please read these terms carefully before using our website and services."
      />

      {/* Content Section */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4">

          {/* Intro */}
          <div className="mb-16">
            <p className="text-lg text-slate-600 leading-relaxed">
              These Terms & Conditions govern your access to and use of the
              services provided by <strong>MegaCode Solution</strong>. By accessing
              or using our website, you agree to be bound by these terms.
            </p>
          </div>

          {/* Terms Blocks */}
          <div className="space-y-12">

            {/* 1 */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing our website or services, you confirm that you have
                read, understood, and agreed to these Terms & Conditions.
              </p>
            </div>

            {/* 2 */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2. Use of Services
              </h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>You agree to use our services only for lawful purposes</li>
                <li>You must not misuse, copy, or reverse-engineer our products</li>
                <li>You must not attempt unauthorized access to our systems</li>
              </ul>
            </div>

            {/* 3 */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3. Intellectual Property
              </h2>
              <p className="text-slate-600 leading-relaxed">
                All content, trademarks, logos, and software are the exclusive
                property of <strong>MegaCode Solution</strong> and are protected
                by applicable intellectual property laws.
              </p>
            </div>

            {/* 4 */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                4. User Accounts
              </h2>
              <p className="text-slate-600 leading-relaxed">
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities conducted under your account.
              </p>
            </div>

            {/* 5 */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We shall not be liable for any indirect, incidental, or
                consequential damages arising from the use of our services.
              </p>
            </div>

            {/* 6 */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                6. Termination
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to suspend or terminate access to our
                services at any time without prior notice if terms are violated.
              </p>
            </div>

            {/* 7 */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                7. Governing Law
              </h2>
              <p className="text-slate-600 leading-relaxed">
                These terms shall be governed and interpreted in accordance with
                the laws of your applicable jurisdiction.
              </p>
            </div>

            {/* 8 */}
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                8. Changes to Terms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may update these Terms & Conditions at any time. Continued use
                of the services indicates acceptance of the revised terms.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-10 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Questions About These Terms?
              </h3>
              <p className="text-slate-600 mb-6">
                Contact us if you have any questions or concerns regarding our Terms & Conditions.
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
