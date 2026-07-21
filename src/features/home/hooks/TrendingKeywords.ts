import { useQuery } from '@tanstack/react-query'
import type { TrendingKeywordsResponse } from '@/features/home/data/trending'
import ApiClient from '@/services/api/ApiClient'

const useTrendingKeywords = (days = 7) => {
    const apiClient = new ApiClient<TrendingKeywordsResponse>(
        'PORTAL',
        '/caremate/newsfeed/trending',
    )

    return useQuery<TrendingKeywordsResponse, Error>({
        queryKey: ['trending-keywords', days],
        queryFn: () => apiClient.get({ params: { days } }),
    })
}

export default useTrendingKeywords