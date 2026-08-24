import { useCallback, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import ApiClient from '@/services/apiClient.ts'
import { CookieHandler } from '@/features/auth/cookieHandler.ts'

interface LoginPayload {
    email: string
    password: string
}

interface RegisterPayload {
    fullName: string
    email: string
    password: string
}

interface LoginResponse {
    access_token: string
    refresh_token: string
    token_type: string
}

export function useAuth() {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const login = useCallback(
        async (payload: LoginPayload) => {
            setIsSubmitting(true)
            setError(null)
            try {
                const client = new ApiClient<LoginResponse>('AUTH', '/auth/login')
                const data = await client.post(payload, { skipAuth: true })
                CookieHandler.setTokens({
                    accessToken: data.access_token,
                    refreshToken: data.refresh_token,
                })
                void navigate({ to: '/', replace: true })
            } catch {
                setError('Invalid email or password')
            } finally {
                setIsSubmitting(false)
            }
        },
        [navigate],
    )

    const register = useCallback(
        async (payload: RegisterPayload) => {
            setIsSubmitting(true)
            setError(null)
            try {
                const client = new ApiClient('AUTH', '/auth/register')
                await client.post(payload, { skipAuth: true })
                void navigate({ to: '/login', replace: true })
            } catch {
                setError('Could not create account')
            } finally {
                setIsSubmitting(false)
            }
        },
        [navigate],
    )

    const logout = useCallback(() => {
        CookieHandler.clearTokens()
        void navigate({ to: '/login', replace: true })
    }, [navigate])

    return {
        login,
        register,
        logout,
        isSubmitting,
        error,
        isAuthenticated: CookieHandler.hasSession(),
    }
}