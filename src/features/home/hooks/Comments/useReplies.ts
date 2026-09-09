import { useQuery } from '@tanstack/react-query'
import ApiClient from '@/services/api/ApiClient'
import type { RepliesResponse } from '@/features/home/data/comment'

const useReplies = (commentId: number, enabled: boolean) => {
    const apiClient = new ApiClient<RepliesResponse>(
        'PORTAL',
        `/caremate/social/comments/replies/${commentId}`,
    )

    return useQuery<RepliesResponse, Error>({
        queryKey: ['comment-replies', commentId],
        queryFn: apiClient.getUnPaginatedList,
        enabled,
    })
}

export default useReplies