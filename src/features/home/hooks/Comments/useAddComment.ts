import { useMutation, useQueryClient } from '@tanstack/react-query'
import ApiClient from '@/services/api/ApiClient'
import type { Comment, AddCommentPayload } from '@/features/home/data/comment'

const useAddComment = (newsId: number) => {
    const queryClient = useQueryClient()

    const apiClient = new ApiClient<Comment>(
        'PORTAL',
        `/caremate/social/comments/${newsId}`,
    )

    return useMutation<Comment, Error, AddCommentPayload>({
        mutationFn: (payload) => apiClient.post(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['comments', newsId] })
        },
    })
}

export default useAddComment