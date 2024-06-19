import { ProjectMemberRoleDtoRole } from "../api/generated";
import {
  PROJECT_ABILITIES,
  ProjectAbilitiesKeys,
} from "../constants/abilities";

export const getProjectAbilities = (
  role: ProjectMemberRoleDtoRole,
): Record<ProjectAbilitiesKeys, boolean> => {
  const abilities: Record<string, boolean> = {};

  Object.keys(PROJECT_ABILITIES).forEach((key) => {
    PROJECT_ABILITIES[key as ProjectAbilitiesKeys].includes(role)
      ? (abilities[key as ProjectAbilitiesKeys] = true)
      : (abilities[key as ProjectAbilitiesKeys] = false);
  });

  return abilities;
};
