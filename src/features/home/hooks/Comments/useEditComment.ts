import { useMutation, useQueryClient } from '@tanstack/react-query'
import ApiClient from '@/services/api/ApiClient'
import type { Comment, EditCommentPayload } from '@/features/home/data/comment'

const useEditComment = (newsId: number) => {
    const queryClient = useQueryClient()

    return useMutation<Comment, Error, EditCommentPayload>({
        mutationFn: ({ commentId, content }) => {
            const apiClient = new ApiClient<Comment>(
                'PORTAL',
                `/caremate/social/comments/${commentId}`,
            )
            return apiClient.patch({ content })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['comments', newsId] })
        },
    })
}

export default useEditComment