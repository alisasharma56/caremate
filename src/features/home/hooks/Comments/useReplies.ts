import { useQuery } from '@tanstack/react-query'
import ApiClient from '@/services/api/ApiClient'
import type { Comment } from '@/features/home/data/comment'

const useReplies = (commentId: number, enabled: boolean) => {
    const apiClient = new ApiClient<Comment[]>(
        'PORTAL',
        `/caremate/social/comments/replies/${commentId}`,
    )

    return useQuery<Comment[], Error>({
        queryKey: ['comment-replies', commentId],
        queryFn: apiClient.getUnPaginatedList,
        enabled,
        staleTime: 0,
        refetchOnMount: 'always',
    })
}

export default useReplies