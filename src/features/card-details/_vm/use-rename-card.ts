import { useUpdateCardMutation } from '@/entities/card'

export const useRenameCard = () => {
  const mutation = useUpdateCardMutation();

  const update = (data: { id: string; name: string }) => {
    mutation.mutate(data);
  };

  const { isPending } = mutation;

  return {
    update,
    isPending,
  };
};