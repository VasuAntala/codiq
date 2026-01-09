import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#001B3D] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">

          {/* Brand */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/Logo.PNG"
                alt="Codiq Solutions Logo"
                width={180}
                height={180}
                className="rounded-md"
                priority
              />
            </Link>

            <p className="-mt-15 ms-7 text-base text-slate-300 leading-relaxed max-w-md">
              Transforming ideas into digital reality. We build scalable,
              high-performance software and AI-driven solutions for modern
              businesses.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
                Services
              </h3>
              <ul className="space-y-4">
                <FooterLink href="/services#web">Web Development</FooterLink>
                <FooterLink href="/services#mobile">Mobile Apps</FooterLink>
                <FooterLink href="/services#graphics">Graphics Design</FooterLink>
                <FooterLink href="/services#marketing">Digital Marketing</FooterLink>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
                Company
              </h3>
              <ul className="space-y-4">
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
                Legal
              </h3>
              <ul className="space-y-4">
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                <FooterLink href="/terms-conditions">Terms & Conditions</FooterLink>
                <FooterLink href="/cookie-policy">Cookie Policy</FooterLink>
              </ul>

              {/* CTA Box */}
              <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-slate-400 mb-2">
                  Ready to start your project?
                </p>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-blue-400 flex items-center hover:underline"
                >
                  Get in touch <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </div>

              {/* Social */}
              <div className="flex space-x-4 pt-2 mt-5">
                <SocialLink href="#" icon={Twitter} />
                <SocialLink href="#" icon={Github} />
                <SocialLink href="#" icon={Linkedin} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Codiq Solutions. All rights reserved.
          </p>

          <div className="flex items-center space-x-2 text-sm text-slate-400">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ------------------ Components ------------------ */

function SocialLink({
  href,
  icon: Icon,
}: {
  href: string
  icon: any
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 flex items-center justify-center rounded-full
      bg-white/10 text-slate-300
      hover:bg-blue-600 hover:text-white
      transition-all duration-300"
    >
      <Icon className="h-5 w-5" />
    </a>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
      >
        {children}
      </Link>
    </li>
  )
}
