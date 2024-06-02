import { useUpdateCardMutation } from './queries'

export const useToggleCardArchive = (id: string) => {
  const { isPending, mutate } = useUpdateCardMutation();

  return {
    isToggleCardPending: isPending,
    toggle: (pressed: boolean) => mutate({ id, isArchived: pressed }),
  };
};
