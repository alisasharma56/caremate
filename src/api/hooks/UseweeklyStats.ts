import { useQuery } from '@tanstack/react-query'
import type { WeeklyStats } from '@/data/weeklystats'
import ApiClient from '@/services/api/ApiClient'

const useWeeklyStats = () => {
    const apiClient = new ApiClient<WeeklyStats>(
        'PORTAL',
        '/caremate/newsfeed/weekly-stats',
    )

    return useQuery<WeeklyStats, Error>({
        queryKey: ['weekly-stats'],
        queryFn: apiClient.getUnPaginatedList,
    })
}

export default useWeeklyStats