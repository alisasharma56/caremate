import { useQuery } from '@tanstack/react-query'
import ApiClient from '@/services/api/ApiClient.ts'
import type { LikeStatus } from '@/features/home/data/like.ts'

const useLikeStatus = (newsId: number) => {
    const apiClient = new ApiClient<LikeStatus>(
        'PORTAL',
        `/caremate/social/likes/${newsId}`,
    )

    return useQuery<LikeStatus, Error>({
        queryKey: ['like-status', newsId],
        queryFn: apiClient.getUnPaginatedList,
        enabled: Boolean(newsId),
    })
}

export default useLikeStatus