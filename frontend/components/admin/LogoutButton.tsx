"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export function LogoutButton() {
    const router = useRouter()

    const handleLogout = async () => {
        // Simple logout by clearing cookie via API
        await fetch('/api/auth/logout', { method: 'POST' })
        router.push('/login')
    }

    return (
        <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
        </Button>
    )
}
