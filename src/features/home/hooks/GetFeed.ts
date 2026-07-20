import { useQuery } from '@tanstack/react-query'
import type { Welcome } from '@/features/home/data/feed'
import ApiClient from '@/services/api/ApiClient'

function publicationTime(publishedAt: string, publishedDate: string) {
  const timestamp = Date.parse(publishedAt || publishedDate)
  return Number.isNaN(timestamp) ? 0 : timestamp
}

function newestFirst(feed: Welcome): Welcome {
  return {
    ...feed,
    items: [...feed.items].sort(
      (first, second) =>
        publicationTime(second.news.published_at, second.news.published_date) -
        publicationTime(first.news.published_at, first.news.published_date),
    ),
  }
}

const useFeed = () => {
  const apiClient = new ApiClient<Welcome>(
    'PORTAL',
    '/caremate/newsfeed/feed',
  )

  return useQuery<Welcome, Error>({
    queryKey: ['feed'],
    queryFn: apiClient.getUnPaginatedList,
    select: newestFirst,
    staleTime: 0,
    refetchOnMount: 'always',
  })
}

export default useFeed
