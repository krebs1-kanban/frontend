import { boardKey } from "@/entities/board";
import { tagControllerCreate } from "@/shared/api/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateTagMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: tagControllerCreate,
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({
        queryKey: [...boardKey, { id: vars.boardId }],
      });
    },
  });
};
