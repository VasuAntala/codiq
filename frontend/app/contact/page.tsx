"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("submitting")

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                setStatus("success")
                setFormData({ name: "", email: "", subject: "", message: "" })
            } else {
                setStatus("error")
            }
        } catch (error) {
            console.error(error)
            setStatus("error")
        }
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="min-h-screen bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-lg text-slate-600"
                    >
                        We'd love to hear from you. Let's discuss your next project.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-slate-900 mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="h-6 w-6 text-blue-400 mt-1" />
                                    <div>
                                        <p className="font-medium text-slate-900">Our Office</p>
                                        <p className="text-slate-600">
                                            Surat, gujarat, India.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Phone className="h-6 w-6 text-blue-400" />
                                    <div>
                                        <p className="font-medium text-slate-900">Phone</p>
                                        <p className="text-slate-600">+91 81283 55328</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Mail className="h-6 w-6 text-blue-400" />
                                    <div>
                                        <p className="font-medium text-slate-900">Email</p>
                                        <p className="text-slate-600">codiqsolutions@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border text-black border-slate-300 bg-white px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border  text-black border-slate-300 bg-white px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border  text-black border-slate-300 bg-white px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border  text-black border-slate-300 bg-white px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <Button
                                type="submit"
                                className="
    w-full
    border
    border-[var(--primary)]
    text-[var(--primary)]
    hover:bg-[var(--primary-light)]
    hover:text-black
    transition-colors
  "
                                disabled={status === "submitting" || status === "success"}
                            >
                                {status === "submitting" ? (
                                    "Sending..."
                                ) : status === "success" ? (
                                    "Message Sent!"
                                ) : (
                                    <>
                                        Send Message <Send className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>

                            {status === "error" && (
                                <p className="text-sm text-red-600 text-center">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                            {status === "success" && (
                                <p className="text-sm text-green-600 text-center">
                                    Thank you! We'll get back to you soon.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
