import { useQuery } from '@tanstack/react-query'
import type { SectorSentimentResponse } from '@/features/home/data/sectorsentiment.ts'
import ApiClient from '@/services/api/ApiClient'

const useSectorSentiment = (days = 30) => {
    const apiClient = new ApiClient<SectorSentimentResponse>(
        'PORTAL',
        '/caremate/newsfeed/sector-sentiment',
    )

    return useQuery<SectorSentimentResponse, Error>({
        queryKey: ['sector-sentiment', days],
        queryFn: () => apiClient.get({ params: { days } }),
    })
}

export default useSectorSentiment