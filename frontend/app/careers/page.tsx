"use client"

import { useState, useEffect } from "react"
import { PageHeader } from "@/components/PageHeader"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

/* ---------------- JOB DATA ---------------- */

/* ---------------- JOB DATA ---------------- */
// Jobs data will be fetched from API


/* ---------------- PAGE ---------------- */
interface Job {
    id: string
    title: string
    department: string
    type: string
    location: string
}

export default function CareersPage() {
    const [open, setOpen] = useState(false)
    const [position, setPosition] = useState("")
    const [jobs, setJobs] = useState<Job[]>([])
    const [errors, setErrors] = useState<Record<string, string>>({})

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        experience: "",
        resume: null as File | null,
        coverLetter: "",
    })

    // Fetch jobs
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch("http://localhost:4000/api/jobs") // Or use env var
                if (res.ok) {
                    const data = await res.json()
                    setJobs(data)
                }
            } catch (error) {
                console.error("Failed to fetch jobs", error)
            }
        }
        fetchJobs()
    }, [])

    /* ---------------- VALIDATION ---------------- */

    const validate = () => {
        const newErrors: Record<string, string> = {}

        if (!form.name.trim()) newErrors.name = "Full name is required"
        if (!/^\S+@\S+\.\S+$/.test(form.email))
            newErrors.email = "Valid email is required"
        if (!/^[0-9]{10,15}$/.test(form.phone))
            newErrors.phone = "Valid phone number is required"
        if (!form.experience)
            newErrors.experience = "Experience is required"
        if (!form.resume)
            newErrors.resume = "Resume is required (PDF or DOC)"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return

        try {
            const res = await fetch("http://localhost:4000/api/career", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    experience: form.experience,
                    resumeLink: "https://example.com/resume.pdf", // TODO: Implement file upload
                    description: form.coverLetter,
                }),
            });

            if (res.ok) {
                alert("Application submitted successfully ✅");
                setOpen(false);
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    experience: "",
                    resume: null,
                    coverLetter: "",
                });
            } else {
                const data = await res.json();
                alert(`Error: ${data.error || "Something went wrong"}`);
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to submit application.");
        }
    }

    return (
        <>
            <PageHeader
                title="Join Our Team"
                description="Build the future with us. We are always looking for talented individuals."
            />

            {/* JOB LIST */}
            <section className="bg-white py-28">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold text-slate-900">
                            Open Positions
                        </h2>
                        <p className="mt-4 text-slate-600 max-w-xl mx-auto">
                            Grow your career with a passionate, innovative team.
                        </p>
                    </div>

                    <div className="space-y-6 max-w-4xl mx-auto">
                        {jobs.map((job, idx) => (
                            <motion.div
                                key={job.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="
                  flex flex-col sm:flex-row
                  items-start sm:items-center
                  justify-between
                  gap-6
                  p-8
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  shadow-sm
                  hover:shadow-xl
                  hover:border-blue-500
                  transition-all
                "
                            >
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900">
                                        {job.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 mt-1">
                                        {job.department} · {job.type} · {job.location}
                                    </p>

                                </div>

                                <Button
                                    variant="outline"
                                    className="
                    rounded-full
                    border-blue-600
                    text-blue-600
                    hover:bg-blue-600
                    hover:text-white
                    transition
                  "
                                    onClick={() => {
                                        setPosition(job.title)
                                        setOpen(true)
                                    }}
                                >
                                    Apply Now
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- MODAL ---------------- */}

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="
          bg-white
          w-full
          max-w-xl
          h-[725px]
          rounded-3xl
          p-8
          relative
          overflow-hidden
        "
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 text-slate-500 hover:text-black"
                            >
                                <X />
                            </button>

                            {/* Header */}
                            <h3 className="text-xl font-bold text-slate-900 mb-1">
                                Apply for {position}
                            </h3>
                            <p className="text-sm text-slate-500 mb-6">
                                Fill out the form below to apply
                            </p>

                            {/* Scrollable Content */}
                            <div className="h-[600px] overflow-y-auto pr-2">
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <Input
                                        label="Full Name"
                                        placeholder="John Doe"
                                        value={form.name}
                                        error={errors.name}
                                        onChange={(e) =>
                                            setForm({ ...form, name: e.target.value })
                                        }
                                    />

                                    <Input
                                        label="Email Address"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={form.email}
                                        error={errors.email}
                                        onChange={(e) =>
                                            setForm({ ...form, email: e.target.value })
                                        }
                                    />

                                    <Input
                                        label="Phone Number"
                                        placeholder="9876543210"
                                        value={form.phone}
                                        error={errors.phone}
                                        onChange={(e) =>
                                            setForm({ ...form, phone: e.target.value })
                                        }
                                    />

                                    <Input
                                        label="Years of Experience"
                                        placeholder="3"
                                        value={form.experience}
                                        error={errors.experience}
                                        onChange={(e) =>
                                            setForm({ ...form, experience: e.target.value })
                                        }
                                    />

                                    {/* Resume */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-slate-700">
                                            Resume
                                        </label>

                                        <div
                                            className={`
                  flex items-center justify-between
                  rounded-xl border px-4 py-3 text-sm
                  ${errors.resume ? "border-red-500" : "border-slate-300"}
                `}
                                        >
                                            <span className="text-slate-500">
                                                {form.resume ? form.resume.name : "Upload PDF or DOC"}
                                            </span>

                                            <input
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                id="resume"
                                                className="hidden"
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        resume: e.target.files?.[0] || null,
                                                    })
                                                }
                                            />
                                            <label
                                                htmlFor="resume"
                                                className="text-blue-600 font-medium cursor-pointer"
                                            >
                                                Browse
                                            </label>
                                        </div>

                                        {errors.resume && (
                                            <p className="text-xs text-red-500">{errors.resume}</p>
                                        )}
                                    </div>

                                    {/* Cover Letter */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-slate-700">
                                            Cover Letter (Optional)
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Tell us why you're a great fit..."
                                            className="
                  w-full rounded-xl border border-slate-300
                  px-4 py-3 text-sm
                  focus:outline-none
                  focus:border-blue-500
                  focus:ring-4 focus:ring-blue-500/10
                "
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    coverLetter: e.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="
                w-full rounded-full bg-blue-600 py-3
                text-sm font-semibold text-white
                shadow-lg shadow-blue-600/20
                hover:bg-blue-700 transition
              "
                                    >
                                        Submit Application
                                    </Button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

/* ---------------- INPUT COMPONENT ---------------- */

function Input({
    label,
    value,
    onChange,
    error,
    type = "text",
    placeholder,
}: {
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    error?: string
    type?: string
    placeholder?: string
}) {
    return (
        <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">
                {label}
            </label>

            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`
          w-full rounded-xl border px-4 py-3 text-sm
          placeholder:text-slate-400
          focus:outline-none focus:ring-4
          focus:ring-blue-500/10
          ${error
                        ? "border-red-500"
                        : "border-slate-300 focus:border-blue-500"
                    }
        `}
            />

            {error && (
                <p className="text-xs text-red-500">{error}</p>
            )}
        </div>
    )
}
