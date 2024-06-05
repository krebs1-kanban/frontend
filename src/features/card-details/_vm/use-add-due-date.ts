import { useUpdateCardMutation } from '@/entities/card/_vm/queries'

export const useAddDueDate = () => {
  const { mutateAsync, isPending } = useUpdateCardMutation();
  const addDueDate = async (data: { id: string; dueDateTime: string }) => {
    await mutateAsync(data);
  };

  return {
    addDueDate,
    isPending,
  };
};
