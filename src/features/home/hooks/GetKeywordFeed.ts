import { useQuery } from '@tanstack/react-query'
import ApiClient from '@/services/api/ApiClient'

export interface KeywordFeedItem {
  id: number
  headline: string
  snippet: string
  published_date: string
  time_ago: string
  sentiment_overall: string
  sentiment_positive_pct: number
  sentiment_negative_pct: number
  sentiment_neutral_pct: number
  keywords: string[]
  urgency: string
  impactness: number
  url: string
}

export interface KeywordFeedResponse {
  keyword: string
  items: KeywordFeedItem[]
  next_cursor: number
  has_more: boolean
}

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
