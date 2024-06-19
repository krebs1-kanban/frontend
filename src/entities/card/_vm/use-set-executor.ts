import { boardKey } from "@/entities/board";
import { cardControllerSetExecutor } from "@/shared/api/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cardKey } from "./queries";

export const useSetExecutorMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: cardControllerSetExecutor,
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: boardKey });
      await queryClient.invalidateQueries({
        queryKey: [...cardKey, { id: vars.cardId }],
      });
    },
  });
};
