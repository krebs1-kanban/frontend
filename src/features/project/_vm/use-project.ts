import { useRoleByProjectIdQuery } from "@/entities/project-member";
import { useGetProjectById } from "@/entities/projects";

export const useProject = ({ id }: { id: string }) => {
  const {
    data: projectData,
    isPending: isProjectPending,
    isError: isProjectError,
    isSuccess: isProjectSuccess,
  } = useGetProjectById(id);

  const {
    data: roleData,
    isPending: isRolePending,
    isError: isRoleError,
    isSuccess: isRoleSuccess,
  } = useRoleByProjectIdQuery(projectData?.project.id!);

  return {
    data: { ...projectData, yourRole: roleData?.role },
    isPending: isProjectPending || isRolePending,
    isError: isProjectError || isRoleError,
    isSuccess: isProjectSuccess && isRoleSuccess,
  };
};
