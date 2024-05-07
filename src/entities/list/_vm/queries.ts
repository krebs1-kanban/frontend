import { boardKey } from "@/entities/board";
import {
	UpdateListDto,
  listControllerCreate,
  listControllerUpdate,
} from "@/shared/api/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: listControllerCreate,
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: boardKey });
    },
  });
};

export const useUpdateListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({id, ...other}: (UpdateListDto & {id: string})) => {
      return listControllerUpdate(id, other);
    },
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: boardKey });
    },
  });
};
