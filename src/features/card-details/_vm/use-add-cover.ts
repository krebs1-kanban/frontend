import { useUpdateCardMutation } from "@/entities/card/_vm/queries";

export const useAddCover = () => {
  const { mutateAsync, isPending } = useUpdateCardMutation();
  const addCover = async (data: { id: string; cover: string }) => {
    await mutateAsync(data);
  };

  return {
    addCover,
    isPending,
  };
};
