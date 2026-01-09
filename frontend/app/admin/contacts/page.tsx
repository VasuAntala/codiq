
import { ContactSubmission } from "@prisma/client"
import { Card } from "@/components/ui/card"
import { Mail, Clock, Inbox } from "lucide-react"
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function ContactsPage() {
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
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Submissions</h1>

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
                        </div>
                    )}
                </ul>
            </Card>
        </div>
    )
}
