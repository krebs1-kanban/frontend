import { boardKey } from "@/entities/board";
import { cardKey } from "@/entities/card/_vm/queries";
import {
  UpdateTagDto,
  tagControllerCreate,
  tagControllerDelete,
  tagControllerUpdate,
} from "@/shared/api/generated";
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

export const useUpdateTagMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...other }: UpdateTagDto & { id: string }) =>
      tagControllerUpdate(id, other),
    async onSettled(data, err, vars, context) {
      if (!err) {
        await queryClient.invalidateQueries({
          queryKey: [...boardKey, { id: data?.boardId }],
        });
        await queryClient.invalidateQueries({
          queryKey: boardKey,
        });
        await queryClient.invalidateQueries({
          queryKey: [...cardKey],
        });
      }
    },
  });
};

export const useDeleteTagMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id }: { id: string }) => tagControllerDelete(id),
    async onSettled(data, err, vars, context) {
      if (!err) {
        await queryClient.invalidateQueries({
          queryKey: boardKey,
        });
        await queryClient.invalidateQueries({
          queryKey: [...cardKey],
        });
      }
    },
  });
};
