import { boardControllerGetByCardId, boardControllerGetById } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";

export const boardKey = ["boards"];

export const useGetBoardByIdQuery = (id: string) => {
  return useQuery({
    queryKey: [...boardKey, {id}],
    queryFn: () => boardControllerGetById(id),
  });
};

export const useGetBoardByCardIdQuery = (id: string) => {
  return useQuery({
    queryKey: [...boardKey, 'by-card-id', {id}],
    queryFn: () => boardControllerGetByCardId(id),
  });
}
