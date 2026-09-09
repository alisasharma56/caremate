// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import ApiClient, { ApiError } from '@/services/api/ApiClient'
// import type { CommentsResponse } from '@/features/home/data/comment'
//
// const useDeleteComment = (newsId: number) => {
//     const queryClient = useQueryClient()
//
//     return useMutation<void, Error, number, { previous: Array<[readonly unknown[], CommentsResponse | undefined]> }>({
//         mutationFn: async (commentId) => {
//             const apiClient = new ApiClient<void>(
//                 'PORTAL',
//                 `/caremate/social/comments/${commentId}`,
//             )
//             try {
//                 await apiClient.delete()
//             } catch (err) {
//                 if (err instanceof ApiError && err.status === 404) {
//                     return
//                 }
//                 throw err
//             }
//         },
//         onMutate: async (commentId) => {
//             await queryClient.cancelQueries({ queryKey: ['comments', newsId] })
//             await queryClient.cancelQueries({ queryKey: ['comment-replies'] })
//
//             const previousComments = queryClient.getQueriesData<CommentsResponse>({ queryKey: ['comments', newsId] })
//             const previousReplies = queryClient.getQueriesData<CommentsResponse>({ queryKey: ['comment-replies'] })
//
//             const markDeleted = (old: CommentsResponse | undefined) => {
//                 if (!old) return old
//                 return {
//                     ...old,
//                     items: old.items.map((comment) =>
//                         comment.id === commentId ? { ...comment, is_deleted: true } : comment,
//                     ),
//                 }
//             }
//
//             queryClient.setQueriesData<CommentsResponse>({ queryKey: ['comments', newsId] }, markDeleted)
//             queryClient.setQueriesData<CommentsResponse>({ queryKey: ['comment-replies'] }, markDeleted)
//
//             return { previous: [...previousComments, ...previousReplies] }
//         },
//         onError: (_err, _commentId, context) => {
//             context?.previous.forEach(([queryKey, data]) => {
//                 queryClient.setQueryData(queryKey, data)
//             })
//         },
//         onSettled: () => {
//             queryClient.invalidateQueries({ queryKey: ['comments', newsId] })
//             queryClient.invalidateQueries({ queryKey: ['comment-replies'] })
//         },
//     })
// }
//
// export default useDeleteComment

import { useMutation, useQueryClient } from '@tanstack/react-query'
import ApiClient, { ApiError } from '@/services/api/ApiClient'
import type { Comment, CommentsResponse } from '@/features/home/data/comment'

interface DeleteCommentContext {
    previousComments: Array<[readonly unknown[], CommentsResponse | undefined]>
    previousReplies: Array<[readonly unknown[], Comment[] | undefined]>
}

const useDeleteComment = (newsId: number) => {
    const queryClient = useQueryClient()

    return useMutation<void, Error, number, DeleteCommentContext>({
        mutationFn: async (commentId: number) => {
            const apiClient = new ApiClient<void>(
                'PORTAL',
                `/caremate/social/comments/${commentId}`,
            )
            try {
                await apiClient.delete()
            } catch (err) {
                if (err instanceof ApiError && err.status === 404) {
                    return
                }
                throw err
            }
        },
        onMutate: async (commentId: number) => {
            await queryClient.cancelQueries({ queryKey: ['comments', newsId] })
            await queryClient.cancelQueries({ queryKey: ['comment-replies'] })

            const previousComments = queryClient.getQueriesData<CommentsResponse>({ queryKey: ['comments', newsId] })
            const previousReplies = queryClient.getQueriesData<Comment[]>({ queryKey: ['comment-replies'] })

            queryClient.setQueriesData<CommentsResponse>({ queryKey: ['comments', newsId] }, (old) => {
                if (!old) return old
                return {
                    ...old,
                    items: old.items.map((comment) =>
                        comment.id === commentId
                            ? { ...comment, is_deleted: true }
                            : comment,
                    ),
                }
            })

            queryClient.setQueriesData<Comment[]>({ queryKey: ['comment-replies'] }, (old) => {
                if (!old) return old
                return old.map((reply) =>
                    reply.id === commentId ? { ...reply, is_deleted: true } : reply,
                )
            })

            const wasReplyOf = previousReplies
                .flatMap(([, replies]) => replies ?? [])
                .find((reply) => reply.id === commentId)?.parent_comment_id

            if (wasReplyOf) {
                queryClient.setQueriesData<CommentsResponse>({ queryKey: ['comments', newsId] }, (old) => {
                    if (!old) return old
                    return {
                        ...old,
                        items: old.items.map((comment) =>
                            comment.id === wasReplyOf
                                ? { ...comment, reply_count: Math.max(0, comment.reply_count - 1) }
                                : comment,
                        ),
                    }
                })
            }

            return { previousComments, previousReplies }
        },
        onError: (_err, _commentId, context) => {
            context?.previousComments.forEach(([queryKey, data]) => {
                queryClient.setQueryData(queryKey, data)
            })
            context?.previousReplies.forEach(([queryKey, data]) => {
                queryClient.setQueryData(queryKey, data)
            })
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['comments', newsId] })
            queryClient.invalidateQueries({ queryKey: ['comment-replies'] })
        },
    })
}

export default useDeleteComment