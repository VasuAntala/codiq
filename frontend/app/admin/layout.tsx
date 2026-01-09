import Link from "next/link"
import { LayoutDashboard, Users, Briefcase, LogOut, FileText } from "lucide-react" // Added FileText
import { LogoutButton } from "@/components/admin/LogoutButton"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col md:flex-row bg-slate-50 dark:bg-slate-950">
            <aside className="w-full md:w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-shrink-0">
                <div className="p-6 h-16 flex items-center border-b border-slate-200 dark:border-slate-800">
                    <Link href="/admin" className="flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-white">
                        <LayoutDashboard className="h-6 w-6 text-blue-600" />
                        <span>Admin</span>
                    </Link>
                </div>
                <nav className="p-4 space-y-1">
                    <SidebarItem href="/admin" icon={<LayoutDashboard size={20} />} label="Dashboard" />
                    <SidebarItem href="/admin/contacts" icon={<Users size={20} />} label="Contacts" />
                    <SidebarItem href="/admin/careers" icon={<Briefcase size={20} />} label="Applications" />
                    <SidebarItem href="/admin/jobs" icon={<FileText size={20} />} label="Job Vacancies" />
                </nav>
                <div className="p-4 border-t border-slate-200 dark:border-slate-800 mt-auto">
                    <div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer">
                        <LogOut size={20} />
                        <LogoutButton />
                    </div>
                </div>
            </aside>
            <main className="flex-1 overflow-y-auto p-4 md:p-8">
                {children}
            </main>
        </div>
    )
}

function SidebarItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
            {icon}
            <span>{label}</span>
        </Link>
    )
}
