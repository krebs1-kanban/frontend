import { useUpdateCardMutation } from "@/entities/card/_vm/queries";

export const useArchiveCard = () => {
  const { mutateAsync, isPending } = useUpdateCardMutation();
  const archive = async (data: { id: string; isArchived: boolean }) => {
    await mutateAsync(data);
  };

  return {
    archive,
    isPending,
  };
};
