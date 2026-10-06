import { useCallback, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import ApiClient from '@/services/apiClient.ts'
import { CookieHandler } from '@/features/auth/cookieHandler.ts'
import type { LoginPayload, LoginResponse, RegisterPayload } from '@/data/auth'

export const useAuth = () => {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [successMessage, setSuccessMessage] = useState<string | null>(null)

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
            setSuccessMessage(null)
            try {
                const client = new ApiClient('AUTH', '/auth/register')
                await client.post(
                    {
                        full_name: payload.fullName,
                        email: payload.email,
                        password: payload.password,
                    },
                    { skipAuth: true },
                )
                setSuccessMessage('Registration successful. Now login.')
                setTimeout(() => {
                    void navigate({ to: '/login', replace: true })
                }, 1500)
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
        successMessage,
        error,
        isAuthenticated: CookieHandler.hasSession(),
    }
}