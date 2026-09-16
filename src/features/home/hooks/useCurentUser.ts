import { useQuery } from '@tanstack/react-query'
import ApiClient from '@/services/api/ApiClient'
import { CookieHandler } from '@/features/auth/cookieHandler.ts'
import type { CurrentUser } from '@/features/home/data/user.ts'

const useCurrentUser = () => {
    const apiClient = new ApiClient<CurrentUser>('PORTAL', '/caremate/auth/me')

    return useQuery<CurrentUser, Error>({
        queryKey: ['current-user'],
        queryFn: apiClient.getUnPaginatedList,
        enabled: CookieHandler.hasSession(),
        staleTime: 5 * 60 * 1000,
    })
}

export default useCurrentUser