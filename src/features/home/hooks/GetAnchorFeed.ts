import { useMutation } from '@tanstack/react-query'
import type { Welcome } from '@/features/home/data/feed'
import ApiClient from '@/services/api/ApiClient'

const anchorFeedClient = new ApiClient<Welcome>(
  'PORTAL',
  '/caremate/newsfeed/feed/anchor',
)

/** Fetches the feed batch containing a specific article. */
const useAnchorFeed = () =>
  useMutation<Welcome, Error, number>({
    mutationFn: (newsId) =>
      anchorFeedClient.get({ params: { anchor_id: newsId } }),
  })

export default useAnchorFeed
