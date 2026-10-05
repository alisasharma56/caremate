export interface LoginPayload {
    email: string
    password: string
}

export interface RegisterPayload {
    fullName: string
    email: string
    password: string
}

export interface LoginResponse {
    access_token: string
    refresh_token: string
    token_type: string
}

export interface AuthTokens {
    accessToken: string
    refreshToken: string
}
