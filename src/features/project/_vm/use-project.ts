import { useGetProjectById } from "@/entities/projects";

export const useProject = ({ id }: { id: string }) => {
  const { data, isPending, isError, isSuccess } = useGetProjectById(id);

  return {
    data,
    isPending,
    isError,
    isSuccess,
  };
};
