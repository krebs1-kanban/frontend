import { useCreateInviteLink } from "@/entities/projects/_vm/queries";

export const useCreateLink = () => {
  const { mutate, isPending, isError, isSuccess } = useCreateInviteLink();

  return { mutate, isPending, isError, isSuccess };
};
