
// import { Career } from "@prisma/client"
interface Career {
    id: string;
    name: string;
    email: string;
    phone: string;
    experience: number;
    resumeLink: string;
    description: string | null;
    createdAt: Date;
}

import { Card } from "@/components/ui/card"
import { Mail, Clock, Inbox, Phone, FileText } from "lucide-react"
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function CareersPage() {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value

    let applications: Career[] = []

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/career`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            cache: 'no-store'
        })
        if (res.ok) {
            applications = await res.json()
        }
    } catch (e) {
        console.error("Failed to fetch applications", e)
    }

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Career Applications</h1>

            <Card className="overflow-hidden border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                <ul role="list" className="divide-y divide-slate-100 dark:divide-slate-800">
                    {applications.map((app) => (
                        <li key={app.id} className="relative group hover:bg-slate-50/50 dark:hover:bg-slate-800/10 transition-colors">
                            <div className="px-6 py-5 sm:flex sm:justify-between sm:items-start gap-x-6">
                                <div className="flex gap-x-4 min-w-0">
                                    <div className="mt-1 flex-none">
                                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-semibold shadow-lg shadow-purple-500/20">
                                            {app.name.charAt(0).toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">
                                            {app.name}
                                        </p>
                                        <div className="mt-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs leading-5 text-slate-500">
                                            <a href={`mailto:${app.email}`} className="flex items-center gap-1 hover:underline hover:text-purple-600">
                                                <Mail className="h-3.5 w-3.5" />
                                                {app.email}
                                            </a>
                                            <a href={`tel:${app.phone}`} className="flex items-center gap-1 hover:underline hover:text-purple-600">
                                                <Phone className="h-3.5 w-3.5" />
                                                {app.phone}
                                            </a>
                                            <span className="flex items-center gap-1">
                                                <BriefcaseIcon className="h-3.5 w-3.5" />
                                                {app.experience} Years Exp.
                                            </span>
                                        </div>
                                        <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                                            {app.description || "No description provided."}
                                        </p>
                                        <div className="mt-3">
                                            <a href={app.resumeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-500 hover:underline">
                                                <FileText className="h-3.5 w-3.5" />
                                                View Resume
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 sm:flex sm:flex-col sm:items-end sm:mt-0">
                                    <div className="flex items-center gap-x-2 text-xs leading-5 text-slate-500">
                                        <Clock className="h-3.5 w-3.5" />
                                        <time dateTime={app.createdAt as any}>
                                            {new Date(app.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </time>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                    {applications.length === 0 && (
                        <div className="p-12 text-center">
                            <div className="mx-auto h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                                <Inbox className="h-6 w-6 text-slate-400" />
                            </div>
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">No applications found</h3>
                        </div>
                    )}
                </ul>
            </Card>
        </div>
    )
}

function BriefcaseIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    )
}
