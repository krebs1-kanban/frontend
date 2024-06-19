import {
  useChangeMemberRoleMutation,
  useDeleteMemberMutation,
} from "@/entities/project-member";
import { ProjectMemberRoleDtoRole } from "@/shared/api/generated";

export const useManageMember = ({
  userId,
  projectId,
}: {
  userId: string;
  projectId: string;
}) => {
  const {
    mutateAsync: changeRole,
    isPending: isRoleChangePending,
    isError: isRoleError,
    isSuccess: isRoleSuccess,
  } = useChangeMemberRoleMutation();

  const {
    mutateAsync: remove,
    isPending: isRemovePending,
    isError: isRemoveError,
    isSuccess: isRemoveSuccess,
  } = useDeleteMemberMutation();

  const handleRoleChange = async (role: ProjectMemberRoleDtoRole) => {
    await changeRole({ userId, projectId, role });
  };

  const handleRemove = async () => {
    await remove({ userId, projectId });
  };

  return {
    handleRoleChange,
    isRoleChangePending,
    isRoleError,
    isRoleSuccess,
    handleRemove,
    isRemovePending,
    isRemoveError,
    isRemoveSuccess,
  };
};
