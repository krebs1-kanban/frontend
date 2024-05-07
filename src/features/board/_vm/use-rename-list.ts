import { useUpdateListMutation } from "@/entities/list";

export const useRenameList = () => {
  const mutation = useUpdateListMutation();

  const update = (data: { id: string; name: string }) => {
    mutation.mutate(data);
  };

  const { isPending } = mutation;

  return {
    update,
    isPending,
  };
};
