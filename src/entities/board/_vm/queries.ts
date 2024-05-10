import { projectKey } from "@/entities/projects";
import {
  BoardWithDetailsDto,
  boardControllerCreate,
  boardControllerGetByCardId,
  boardControllerGetById,
  boardControllerMoveCard,
  boardControllerMoveList,
} from "@/shared/api/generated";
import { arrayMove } from "@dnd-kit/sortable";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const boardKey = ["boards"];

export const useGetBoardByIdQuery = (id: string) => {
  return useQuery({
    queryKey: [...boardKey, { id }],
    queryFn: () => boardControllerGetById(id),
  });
};

export const useGetBoardByCardIdQuery = (id: string) => {
  return useQuery({
    queryKey: [...boardKey, "by-card-id", { id }],
    queryFn: () => boardControllerGetByCardId(id),
  });
};

export const useCreateBoardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: boardControllerCreate,
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: projectKey });
    },
  });
};

export const useMoveListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: boardControllerMoveList,
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: boardKey });
    },
  });
};

export const useMoveCardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: boardControllerMoveCard,
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: boardKey });
    },
  });
};
