import { useUpdateProjectMutation } from "@/entities/projects/_vm/queries";

export const useRename = () => {
  const { mutate, isPending, isError, isSuccess } = useUpdateProjectMutation();
  const rename = ({ name, projectId }: { name: string; projectId: string }) => {
    mutate({ name, id: projectId });
  };
  return {
    rename,
    isPending,
    isError,
    isSuccess,
  };
};
