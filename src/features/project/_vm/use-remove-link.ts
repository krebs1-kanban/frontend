import { useDeleteInviteLink } from "@/entities/projects/_vm/queries";

export const useRemoveLink = () => {
  const { mutate, isPending, isError, isSuccess } = useDeleteInviteLink();

  return { mutate, isPending, isError, isSuccess };
};
