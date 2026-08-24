import type { ReactNode } from 'react'
import { Navigate } from '@tanstack/react-router'
import { CookieHandler } from '@/features/auth/cookieHandler.ts'

interface PrivateRouteProps {
    children: ReactNode
}

export function PrivateRoute({ children }: PrivateRouteProps) {
    if (!CookieHandler.hasSession()) {
        return <Navigate to="/login" replace />
    }
    return children
}