import { useUpdateCardMutation } from '@/entities/card'

export const useUpdateCardDescription = () => {
  const mutation = useUpdateCardMutation();

  const update = (data: { id: string; description: string }) => {
    mutation.mutate(data);
  };

  const { isPending } = mutation;

  return {
    update,
    isPending,
  };
};