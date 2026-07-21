import { useQuery } from '@tanstack/react-query'
import type { EmergingKeywordsResponse } from '@/features/home/data/emergingkeywords.ts'
import ApiClient from '@/services/api/ApiClient'

const useEmergingKeywords = () => {
    const apiClient = new ApiClient<EmergingKeywordsResponse>(
        'PORTAL',
        '/caremate/newsfeed/emerging-keywords',
    )

    return useQuery<EmergingKeywordsResponse, Error>({
        queryKey: ['emerging-keywords'],
        queryFn: apiClient.getUnPaginatedList,
    })
}

export default useEmergingKeywords