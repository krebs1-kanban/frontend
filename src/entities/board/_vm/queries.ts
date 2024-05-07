import { boardControllerGetById } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";

export const boardKey = ["boards"];

export const useBoardByIdQuery = (id: string) => {
  return useQuery({
    queryKey: [...boardKey, {id}],
    queryFn: () => boardControllerGetById(id),
  });
};
