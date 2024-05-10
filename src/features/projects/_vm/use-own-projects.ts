import { useGetProjectsWhereMemberQuery } from "@/entities/projects";

export const useOwnProjects = () => {
  const projects = useGetProjectsWhereMemberQuery();

  const isPending = projects.isPending;
  const isError = projects.isError;
  const isSuccess = projects.isSuccess;

  return {
    data: projects.data,
    isPending: projects.isPending,
    isError: projects.isError,
    isSuccess: projects.isSuccess,
  };
};
