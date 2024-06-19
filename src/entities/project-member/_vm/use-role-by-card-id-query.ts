import { projectMemberControllerGetRoleByProjectId } from "@/shared/api/generated";
import { REACT_QUERY_KEYS } from "@/shared/constants/react-query-keys";
import { useQuery } from "@tanstack/react-query";

export const useRoleByCardIdQuery = (cardId: string) => {
  return useQuery({
    queryKey: [REACT_QUERY_KEYS.PROJECT_ROLE, { cardId }],
    queryFn: () => projectMemberControllerGetRoleByProjectId(cardId),
    enabled: !!cardId,
  });
};
