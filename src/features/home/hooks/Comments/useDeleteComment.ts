import { useMutation, useQueryClient } from '@tanstack/react-query'
import ApiClient from '@/services/api/ApiClient'

const useDeleteComment = (newsId: number) => {
    const queryClient = useQueryClient()

    return useMutation<void, Error, number>({
        mutationFn: (commentId) => {
            const apiClient = new ApiClient<void>(
                'PORTAL',
                `/caremate/social/comments/${commentId}`,
            )
            return apiClient.delete()
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['comments', newsId] })
        },
    })
}

export default useDeleteComment