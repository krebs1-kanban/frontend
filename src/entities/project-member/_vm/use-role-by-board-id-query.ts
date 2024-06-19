import { projectMemberControllerGetRoleByBoardId } from "@/shared/api/generated";
import { REACT_QUERY_KEYS } from "@/shared/constants/react-query-keys";
import { useQuery } from "@tanstack/react-query";

export const useRoleByBoardIdQuery = (boardId: string) => {
  return useQuery({
    queryKey: [REACT_QUERY_KEYS.PROJECT_ROLE, { boardId }],
    queryFn: () => projectMemberControllerGetRoleByBoardId(boardId),
    enabled: !!boardId,
  });
};
