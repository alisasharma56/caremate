const ACCESS_TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

interface CookieOptions {
    days?: number
    path?: string
    sameSite?: 'Strict' | 'Lax' | 'None'
    secure?: boolean
}

function setCookie(name: string, value: string, options: CookieOptions = {}) {
    const { days = 7, path = '/', sameSite = 'Lax', secure = true } = options
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString()
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}; SameSite=${sameSite}${secure ? '; Secure' : ''}`
}

function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
    return match ? decodeURIComponent(match[1]) : null
}

function removeCookie(name: string, path = '/') {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`
}

export interface AuthTokens {
    accessToken: string
    refreshToken: string
}

export const CookieHandler = {
    setTokens({ accessToken, refreshToken }: AuthTokens) {
        setCookie(ACCESS_TOKEN_KEY, accessToken, { days: 1 })
        setCookie(REFRESH_TOKEN_KEY, refreshToken, { days: 30 })
    },
    setAccessToken(accessToken: string) {
        setCookie(ACCESS_TOKEN_KEY, accessToken, { days: 1 })
    },
    getAccessToken(): string | null {
        return getCookie(ACCESS_TOKEN_KEY)
    },
    getRefreshToken(): string | null {
        return getCookie(REFRESH_TOKEN_KEY)
    },
    clearTokens() {
        removeCookie(ACCESS_TOKEN_KEY)
        removeCookie(REFRESH_TOKEN_KEY)
    },
    hasSession(): boolean {
        return getCookie(ACCESS_TOKEN_KEY) !== null
    },
}