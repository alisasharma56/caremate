import { useQuery } from '@tanstack/react-query'
import type { Welcome } from '@/features/home/data/feed'
import ApiClient from '@/services/api/ApiClient'

const useFeed = () => {
  const apiClient = new ApiClient<Welcome>(
    'PORTAL',
    '/caremate/newsfeed/feed',
  )

  return useQuery<Welcome, Error>({
    queryKey: ['feed'],
    queryFn: apiClient.getUnPaginatedList,
  })
}

export default useFeed
