import { projectKey } from "@/entities/projects";
import { projectMemberControllerDeleteMember } from "@/shared/api/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteMemberMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: projectMemberControllerDeleteMember,
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: projectKey });
    },
  });
};
