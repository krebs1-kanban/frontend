import { boardKey } from '@/entities/board'
import { cardControllerCreate } from '@/shared/api/generated'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateCardMutation = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: cardControllerCreate,
		async onSettled(data, err, vars, context) {
			await queryClient.invalidateQueries({queryKey: boardKey})
		}
	})
}