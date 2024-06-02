import {
  UpdateAccountDto,
  usersControllerUpdateProfile,
} from "@/shared/api/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...other }: UpdateAccountDto & { id: string }) => {
      return usersControllerUpdateProfile(id, other);
    },
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
