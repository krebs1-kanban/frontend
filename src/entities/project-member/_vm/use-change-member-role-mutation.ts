import { projectKey } from "@/entities/projects";
import { projectMemberControllerChangeRole } from "@/shared/api/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useChangeMemberRoleMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: projectMemberControllerChangeRole,
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: projectKey });
    },
  });
};
