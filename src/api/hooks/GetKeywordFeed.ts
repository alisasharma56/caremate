import { useQuery } from '@tanstack/react-query'
import type { KeywordFeedResponse } from '@/data/keywordfeed'
import ApiClient from '@/services/api/ApiClient'

const useKeywordFeed = (keyword: string, cursor?: number) => {
  const apiClient = new ApiClient<KeywordFeedResponse>(
    'PORTAL',
    '/caremate/newsfeed/keyword-feed',
  )

  return useQuery<KeywordFeedResponse, Error>({
    queryKey: ['keyword-feed', keyword, cursor],
    queryFn: () => apiClient.get({ params: { keyword, cursor } }),
    enabled: keyword.trim().length > 0,
  })
}

export default useKeywordFeed
