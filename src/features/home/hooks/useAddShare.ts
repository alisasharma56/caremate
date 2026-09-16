import { useMutation, useQueryClient } from '@tanstack/react-query'
import ApiClient from '@/services/api/ApiClient'
import type { ShareStatus } from '@/features/home/data/share'

const useAddShare = (newsId: number) => {
    const queryClient = useQueryClient()

    return useMutation<ShareStatus, Error, void>({
        mutationFn: () => {
            const apiClient = new ApiClient<ShareStatus>(
                'PORTAL',
                `/caremate/social/shares/${newsId}`,
            )
            return apiClient.post({})
        },
        onSuccess: (data) => {
            queryClient.setQueryData(['share-count', newsId], data)
        },
    })
}

export default useAddShare