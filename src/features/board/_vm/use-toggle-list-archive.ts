import { useUpdateListMutation } from "@/entities/list";

export const useToggleListArchive = (id: string) => {
  const { isPending, mutate } = useUpdateListMutation();

  return {
    isToggleListPending: isPending,
    toggle: (pressed: boolean) => mutate({ id, isArchived: pressed }),
  };
};
