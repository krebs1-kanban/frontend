import { projectMemberControllerGetMembersByProjectId } from "@/shared/api/generated";
import { REACT_QUERY_KEYS } from "@/shared/constants/react-query-keys";
import { useQuery } from "@tanstack/react-query";

export const useMembersByProjectIdQuery = (projectId: string) => {
  return useQuery({
    queryKey: [REACT_QUERY_KEYS.PROJECT_MEMBERS, { projectId }],
    queryFn: () => projectMemberControllerGetMembersByProjectId(projectId),
    enabled: !!projectId,
  });
};
