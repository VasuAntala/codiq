"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { Code2, Loader2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function SignupPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            })

            const data = await res.json()

            if (res.ok) {
                document.cookie = `token=${data.token}; path=/; max-age=7200; SameSite=Strict`
                // Redirect based on role (though newly registered usually USER)
                if (data.role === 'ADMIN') {
                    router.push("/admin")
                } else {
                    router.push("/dashboard")
                }
            } else {
                setError(data.error || "Registration failed")
            }
        } catch (err) {
            setError("An error occurred")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10 px-4"
            >
                <div className="bg-white/5 dark:bg-slate-900/40 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-slate-200/20 dark:border-slate-700/50 shadow-2xl">
                    <div className="text-center mb-8">
                        <Link href="/" className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-purple-600/10 mb-6 group hover:bg-purple-600/20 transition-colors">
                            <Code2 className="h-8 w-8 text-purple-500" />
                        </Link>
                        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Create Account</h2>
                        <p className="text-slate-400">
                            Join Codiq Solutions today
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-slate-300">Full Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    className="bg-slate-950/50 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-purple-500/50"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-slate-300">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    className="bg-slate-950/50 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-purple-500/50"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-slate-300">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    className="bg-slate-950/50 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-purple-500/50"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                                {error}
                            </div>
                        )}

                        <Button type="submit" className="w-full h-12 rounded-xl text-base font-medium shadow-lg shadow-purple-500/20 hover:bg-purple-600" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Creating Account...
                                </>
                            ) : (
                                <>
                                    Sign Up <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-slate-500">
                            Already have an account?{" "}
                            <Link href="/login" className="text-purple-400 hover:text-purple-300 transition-colors">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
