import { LogoutButton } from "@/components/admin/LogoutButton"
import { Mail, Clock, Inbox, Search } from "lucide-react"

import { ContactSubmission } from "@prisma/client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const dynamic = 'force-dynamic'

import { cookies } from 'next/headers'

export default async function AdminPage() {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value

    let submissions: ContactSubmission[] = []

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            cache: 'no-store'
        })
        if (res.ok) {
            submissions = await res.json()
        }
    } catch (e) {
        console.error("Failed to fetch submissions", e)
    }

    return (
        <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950/50">
            {/* Header */}
            <header className="sticky top-0 z-40 glass-nav border-b border-slate-200/50 dark:border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400">
                            <Inbox className="h-5 w-5" />
                        </div>
                        <h1 className="text-lg font-semibold text-slate-900 dark:text-white">Admin Dashboard</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <LogoutButton />
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats / Overview */}
                <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Card className="glass shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500">Total Messages</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-baseline space-x-2">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">{submissions.length}</span>
                                <span className="text-xs text-green-500 font-medium">+12%</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Placeholders */}
                    <Card className="glass shadow-sm opacity-50">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500">Unread</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <span className="text-4xl font-bold text-slate-900 dark:text-white">-</span>
                        </CardContent>
                    </Card>
                    <Card className="glass shadow-sm opacity-50">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500">Response Rate</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <span className="text-4xl font-bold text-slate-900 dark:text-white">-</span>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Submissions</h2>
                    <div className="relative w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                            type="text"
                            placeholder="Search messages..."
                            className="pl-9 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                        />
                    </div>
                </div>

                <Card className="overflow-hidden border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                    <ul role="list" className="divide-y divide-slate-100 dark:divide-slate-800">
                        {submissions.map((submission) => (
                            <li key={submission.id} className="relative group hover:bg-slate-50/50 dark:hover:bg-slate-800/10 transition-colors">
                                <div className="px-6 py-5 sm:flex sm:justify-between sm:items-start gap-x-6">
                                    <div className="flex gap-x-4 min-w-0">
                                        <div className="mt-1 flex-none">
                                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white text-sm font-semibold shadow-lg shadow-blue-500/20">
                                                {submission.name.charAt(0).toUpperCase()}
                                            </div>
                                        </div>
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-semibold leading-6 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                                {submission.name}
                                            </p>
                                            <p className="mt-1 flex text-xs leading-5 text-slate-500">
                                                <a href={`mailto:${submission.email}`} className="relative hover:underline">
                                                    {submission.email}
                                                </a>
                                            </p>
                                            <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
                                                <span className="font-medium text-slate-900 dark:text-white block mb-1">
                                                    {submission.subject || "No Subject"}
                                                </span>
                                                {submission.message}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4 sm:flex sm:flex-col sm:items-end sm:mt-0">
                                        <div className="flex items-center gap-x-2 text-xs leading-5 text-slate-500">
                                            <Clock className="h-3.5 w-3.5" />
                                            <time dateTime={submission.createdAt as any}>
                                                {new Date(submission.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                            </time>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                        {submissions.length === 0 && (
                            <div className="p-12 text-center">
                                <div className="mx-auto h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                                    <Inbox className="h-6 w-6 text-slate-400" />
                                </div>
                                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">No messages found</h3>
                                <p className="mt-1 text-sm text-slate-500">Get started by sharing your contact form.</p>
                            </div>
                        )}
                    </ul>
                </Card>
            </main>
        </div>
    )
}
