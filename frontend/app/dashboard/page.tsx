import { LogoutButton } from "@/components/admin/LogoutButton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, ArrowUpRight } from "lucide-react"

export const dynamic = 'force-dynamic'

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400">
                            <Code2 className="h-5 w-5" />
                        </div>
                        <h1 className="text-lg font-semibold text-slate-900 dark:text-white">User Dashboard</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <LogoutButton />
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Welcome!</h2>
                    <p className="mt-1 text-slate-500">Manage your projects and account settings.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Your Projects</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-500">You haven't started any projects yet.</p>
                            <button className="mt-4 text-sm font-medium text-blue-600 flex items-center hover:underline">
                                Start a Project <ArrowUpRight className="ml-1 h-3 w-3" />
                            </button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Support Status</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-2">
                                <span className="h-2 w-2 rounded-full bg-green-500" />
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Active</span>
                            </div>
                            <p className="mt-2 text-sm text-slate-500">Priority support is enabled for your account.</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
