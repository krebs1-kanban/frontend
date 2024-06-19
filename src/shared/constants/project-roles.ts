import { ProjectMemberRoleDtoRole } from "../api/generated";

export const PROJECT_ROLES_NAMES: Record<ProjectMemberRoleDtoRole, string> = {
  ADMIN: "Администратор",
  MEMBER: "Участник",
  OBSERVER: "Наблюдатель",
};
