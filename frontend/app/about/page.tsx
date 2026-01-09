"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
    Code2,
    Target,
    Users,
    Lightbulb,
    ShieldCheck,
    Rocket,
    ArrowRight,
} from "lucide-react"
import { PageHeader } from "@/components/PageHeader"

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="About Codiq Solutions"
                description="Engineering scalable software products with precision, performance, and purpose."
            />

            {/* INTRO STORY */}
            <section className="relative bg-white py-32 overflow-hidden">
                {/* Color accents */}
                <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-70" />
                <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-indigo-100 blur-3xl opacity-70" />

                <div className="relative mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-sm font-semibold tracking-widest uppercase mb-4 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Our Identity
                            </p>

                            <h2 className="text-5xl font-extrabold leading-tight mb-8 text-slate-900">
                                We build software <br />
                                <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    that scales with ambition.
                                </span>
                            </h2>

                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Codiq Solutions is a technology-driven IT company crafting
                                intelligent digital products for startups and modern businesses.
                            </p>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                We combine engineering excellence with business-first thinking
                                to deliver real impact.
                            </p>
                        </motion.div>

                        {/* Side Highlights */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {[
                                { icon: Code2, label: "Engineering First", color: "from-blue-500 to-indigo-500" },
                                { icon: ShieldCheck, label: "Security Focused", color: "from-indigo-500 to-violet-500" },
                                { icon: Rocket, label: "Growth Ready", color: "from-violet-500 to-purple-500" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
                                >
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${item.color} text-white`}
                                    >
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <span className="text-lg font-semibold text-slate-800">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="bg-linear-to-b from-blue-50 to-white py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid md:grid-cols-2 gap-16">

                        {/* MISSION */}
                        <motion.div
                            whileHover={{ y: -8 }}
                            className="rounded-3xl bg-white p-12 border border-blue-100 transition hover:shadow-xl"
                        >
                            <Target className="h-10 w-10 text-blue-600 mb-6" />

                            <h3 className="text-3xl font-bold text-slate-900 mb-6">
                                Our Mission
                            </h3>

                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Our mission is to deliver reliable, scalable, and high-performance
                                software solutions that help businesses grow faster and operate
                                smarter in a digital-first world.
                            </p>

                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                We focus on building products that combine clean engineering,
                                intuitive user experience, and long-term maintainability.
                            </p>

                            <ul className="space-y-3 text-slate-700 font-medium">
                                <li>• Build scalable and secure software systems</li>
                                <li>• Solve real business problems with technology</li>
                                <li>• Deliver measurable value through quality engineering</li>
                            </ul>
                        </motion.div>

                        {/* VISION */}
                        <motion.div
                            whileHover={{ y: -8 }}
                            className="rounded-3xl bg-white p-12 border border-indigo-100 transition hover:shadow-xl"
                        >
                            <Lightbulb className="h-10 w-10 text-indigo-600 mb-6" />

                            <h3 className="text-3xl font-bold text-slate-900 mb-6">
                                Our Vision
                            </h3>

                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Our vision is to become a globally trusted technology partner,
                                empowering businesses through intelligent, future-ready digital
                                ecosystems.
                            </p>

                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                We aspire to lead innovation by continuously evolving with emerging
                                technologies and building products that scale across industries.
                            </p>

                            <ul className="space-y-3 text-slate-700 font-medium">
                                <li>• Be a long-term digital growth partner</li>
                                <li>• Drive innovation through modern technology</li>
                                <li>• Create impactful software with global reach</li>
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="bg-white py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-[1.5fr_1fr] gap-3 items-start">
                        {/* Left: principles timeline */}
                        <div className="flex flex-col justify-center">
                            <div className="mb-20 max-w-2xl">
                                <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-blue-600">
                                    Our Principles
                                </p>
                                <h2 className="text-4xl font-extrabold text-slate-900">
                                    Values that shape our culture
                                </h2>
                            </div>

                            <div className="relative space-y-12 pl-12">
                                {[
                                    {
                                        title: "Innovation",
                                        desc: "Embracing modern technologies and smarter solutions.",
                                    },
                                    {
                                        title: "Integrity",
                                        desc: "Honest communication and long-term partnerships.",
                                    },
                                    {
                                        title: "Excellence",
                                        desc: "High standards in design, code, and delivery.",
                                    },
                                ].map((value, i) => (
                                    <motion.div
                                        key={value.title}
                                        initial={{ opacity: 0, x: -40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative flex items-center gap-6 pl-6"
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute -left-[6px] top-8 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_0_6px_rgba(59,130,246,0.15)]" />

                                        <div className="text-6xl font-extrabold bg-linear-to-br from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                                            {String(i + 1).padStart(2, "0")}
                                        </div>

                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-1">
                                                {value.title}
                                            </h3>
                                            <p className="text-lg text-slate-600 max-w-2xl">
                                                {value.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right: principal image */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative flex items-center justify-center"
                        >
                            <div className="relative w-full max-w-md h-[460px] md:h-[520px] lg:h-[500px] flex items-center justify-center rounded-2xl overflow-hidden shadow-[0_10px_50px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_20px_30px_rgba(20,10,44,0.20)]">
                                <Image
                                    src="/ITphoto.jpg"
                                    alt="Principal at Codiq Solutions"
                                    width={640}
                                    height={500}
                                    className="h-full w-auto object-cover overflow-hidden"
                                    priority={false}
                                />
                                <div className="pointer-events-none absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* WHY CODIQ */}
            <section className="bg-linear-to-r from-blue-50 to-indigo-50 py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
                        <h2 className="text-4xl font-extrabold text-slate-900 max-w-xl">
                            Why businesses choose <br /> Codiq Solutions
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-6 max-w-xl">
                            {[
                                "Modern Tech Stack",
                                "Scalable Architecture",
                                "Dedicated Team",
                                "Security-First",
                                "Transparent Communication",
                                "On-Time Delivery",
                            ].map((point) => (
                                <div
                                    key={point}
                                    className="flex items-center justify-between rounded-xl bg-white border border-blue-100 p-5 hover:shadow-lg transition"
                                >
                                    <span className="font-medium text-slate-800">{point}</span>
                                    <ArrowRight className="h-4 w-4 text-blue-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
