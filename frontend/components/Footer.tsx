import Link from "next/link"
import { Code2, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#001B3D] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">

          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group w-fit">
              <div className="p-2 rounded-xl bg-blue-600 text-white">
                <Code2 className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Codiq
              </span>
            </Link>

            <p className="text-base text-slate-300 leading-relaxed max-w-md">
              Transforming ideas into digital reality. We build scalable,
              high-performance software and AI solutions for the modern world.
            </p>

            <div className="flex space-x-4 pt-2">
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Github} />
              <SocialLink href="#" icon={Linkedin} />
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
                Services
              </h3>
              <ul className="space-y-4">
                <FooterLink href="/services#web">Web Development</FooterLink>
                <FooterLink href="/services#mobile">Mobile Apps</FooterLink>
                <FooterLink href="/services#ai">AI Solutions</FooterLink>
                <FooterLink href="/services#marketing">Digital Marketing</FooterLink>
              </ul>
            </div>

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

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
                Legal
              </h3>
              <ul className="space-y-4">
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                <FooterLink href="/terms">Terms of Service</FooterLink>
              </ul>

              <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-slate-400 mb-2">Ready to start?</p>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-blue-400 flex items-center hover:underline"
                >
                  Get in touch <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Codiq Solutions. All rights reserved.
          </p>

          <span className="flex items-center space-x-2 text-sm text-slate-400">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span>Systems Operational</span>
          </span>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      className="h-10 w-10 flex items-center justify-center rounded-full
      bg-white/10 text-slate-300
      hover:bg-blue-600 hover:text-white
      transition-all duration-300"
    >
      <Icon className="h-5 w-5" />
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
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
