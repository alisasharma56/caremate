import { useMutation, useQueryClient } from '@tanstack/react-query'
import ApiClient from '@/services/api/ApiClient.ts'
import type { LikeStatus } from '@/features/home/data/like.ts'

const useToggleLike = (newsId: number) => {
    const queryClient = useQueryClient()

    return useMutation<LikeStatus, Error, void, { previous: LikeStatus | undefined }>({
        mutationFn: () => {
            const apiClient = new ApiClient<LikeStatus>(
                'PORTAL',
                `/caremate/social/likes/${newsId}`,
            )
            return apiClient.post()
        },
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey: ['like-status', newsId] })

            const previous = queryClient.getQueryData<LikeStatus>(['like-status', newsId])

            queryClient.setQueryData<LikeStatus>(['like-status', newsId], (old) => {
                if (!old) return old
                return {
                    liked: !old.liked,
                    like_count: old.liked ? Math.max(0, old.like_count - 1) : old.like_count + 1,
                }
            })

            return { previous }
        },
        onError: (_err, _vars, context) => {
            if (context?.previous) {
                queryClient.setQueryData(['like-status', newsId], context.previous)
            }
        },
        onSuccess: (data) => {
            queryClient.setQueryData(['like-status', newsId], data)
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['like-status', newsId] })
        },
    })
}

export default useToggleLike