
import { ContactSubmission } from "@prisma/client"
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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input" // Not needed for simple dashboard
// import { Search } from "lucide-react"
import { Users, Briefcase, Mail } from "lucide-react"
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function AdminDashboardPage() {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value

    let contactCount = 0
    let careerCount = 0

    // Parallel fetch
    try {
        const [contactRes, careerRes] = await Promise.all([
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
                headers: { 'Authorization': `Bearer ${token}` },
                cache: 'no-store'
            }),
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/career`, {
                headers: { 'Authorization': `Bearer ${token}` },
                cache: 'no-store'
            })
        ])

        if (contactRes.ok) {
            const data: ContactSubmission[] = await contactRes.json()
            contactCount = data.length
        }
        if (careerRes.ok) {
            const data: Career[] = await careerRes.json()
            careerCount = data.length
        }
    } catch (e) {
        console.error("Failed to fetch stats", e)
    }

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="glass shadow-sm">
                    <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-sm font-medium text-slate-500">Total Contacts</CardTitle>
                        <Mail className="h-4 w-4 text-slate-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">{contactCount}</div>
                        <p className="text-xs text-slate-500">Messages received</p>
                    </CardContent>
                </Card>

                <Card className="glass shadow-sm">
                    <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-sm font-medium text-slate-500">Career Applications</CardTitle>
                        <Briefcase className="h-4 w-4 text-slate-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">{careerCount}</div>
                        <p className="text-xs text-slate-500">Resumes received</p>
                    </CardContent>
                </Card>

                <Card className="glass shadow-sm opacity-60">
                    <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-sm font-medium text-slate-500">Website Visits</CardTitle>
                        <Users className="h-4 w-4 text-slate-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">-</div>
                        <p className="text-xs text-slate-500">Coming soon</p>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-blue-50 dark:bg-slate-900/50 border border-blue-100 dark:border-slate-800">
                <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">Welcome to Codiq Admin</h3>
                <p className="mt-1 text-sm text-blue-600 dark:text-slate-400">
                    Use the sidebar to navigate between contact submissions and career applications.
                </p>
            </div>
        </div>
    )
}
