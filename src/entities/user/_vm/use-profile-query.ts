import { usersControllerGetProfile, usersControllerGetProfileByUserId } from '@/shared/api/generated'
import { useQuery } from '@tanstack/react-query'

const profileKey = ["profile"];

export function useProfileQuery(){
	return useQuery({
		queryKey: profileKey,
		queryFn: () => usersControllerGetProfile(),
		retry: 0,
		staleTime: 10*60*1000,
	})
}