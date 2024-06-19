"use client";

import { getProjectAbilities } from "@/shared/lib/get-project-abilities";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { cn } from "@/shared/ui/utils";
import { useEffect } from "react";
import { ProjectHeader } from "./_ui/project-header";
import { ProjectMain } from "./_ui/project-main";
import { useProject } from "./_vm/use-project";

export function Project({
  className,
  projectId,
}: {
  className?: string;
  projectId: string;
}) {
  const { data, isPending, isError } = useProject({ id: projectId });

  useEffect(() => {
    document.title = data?.project?.name ?? "Проект";
  }, [data?.project?.name]);

  if (isPending) return <FullPageSpinner isLoading />;

  if (isError) return <h2>Ошибка загрузки проекта.</h2>;

  const abilities = getProjectAbilities(data?.yourRole!);

  console.log(abilities);

  return (
    <div className={cn("flex flex-col")}>
      <ProjectHeader
        projectId={data?.project?.id!}
        projectName={data?.project?.name!}
        projectLink={data?.project?.inviteLink!}
        projectMembers={data?.members!}
        canRename={abilities.RENAME_PROJECT}
        canAddMember={
          abilities.CREATE_INVITE_LINK && abilities.DELETE_INVITE_LINK
        }
        canControlMembers={abilities.MEMBER_CONTROL}
        className={cn("mb-4")}
      />
      <ProjectMain
        projectId={data?.project?.id!}
        boards={data?.boards!}
        canCreateBoard={abilities.CREATE_BOARD}
      />
    </div>
  );
}
