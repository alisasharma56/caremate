export interface CurrentUser {
    id: number
    email: string
    full_name: string
    avatar_url: string | null
    is_active: boolean
    is_verified: boolean
    created_at: string
}