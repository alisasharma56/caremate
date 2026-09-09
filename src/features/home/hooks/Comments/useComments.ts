import { useQuery } from '@tanstack/react-query'
import ApiClient from '@/services/api/ApiClient'
import type { CommentsResponse } from '@/features/home/data/comment'

const useComments = (newsId: number, limit = 20) => {
    const apiClient = new ApiClient<CommentsResponse>(
        'PORTAL',
        `/caremate/social/comments/${newsId}`,
    )

    return useQuery<CommentsResponse, Error>({
        queryKey: ['comments', newsId, limit],
        queryFn: () => apiClient.get({ params: { limit } }),
        enabled: Boolean(newsId),
    })
}

export default useComments