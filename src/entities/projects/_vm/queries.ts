import { projectControllerGet } from '@/shared/api/generated'
import { useQuery } from '@tanstack/react-query'

const projectKey = ['project']

export const useProjectsWhereMemberQuery = ()=>{
	return useQuery({
		queryKey: projectKey,
		queryFn: projectControllerGet,
	})
}