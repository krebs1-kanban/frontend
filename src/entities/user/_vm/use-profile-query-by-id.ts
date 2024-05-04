import { usersControllerGetProfileByUserId } from '@/shared/api/generated'
import { useQuery } from '@tanstack/react-query'

const profileKey = ["profile"];

export function useProfileByIdQuery(userId: string){
	return useQuery({
		queryKey: [...profileKey, userId],
		queryFn: () => usersControllerGetProfileByUserId(userId),
		retry: 0,
		staleTime: 10*60*1000,
	})
}