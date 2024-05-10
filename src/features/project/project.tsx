"use client";

import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { cn } from "@/shared/ui/utils";
import { useEffect } from "react";
import { ProjectHeader } from "./_ui/project-header";
import { useProject } from "./_vm/use-project";
import { ProjectMain } from './_ui/project-main'

export function Project({
  className,
  projectId,
}: {
  className?: string;
  projectId: string;
}) {
  const { data, isPending, isError } = useProject({ id: projectId });

	useEffect(() => {
    document.title = data?.project.name!;
  }, [data?.project.name]);

  if (isPending) return <FullPageSpinner isLoading />;

  if (isError) return <h2>Ошибка загрузки проекта.</h2>;

  return (
    <div className={cn("flex flex-col")}>
      <ProjectHeader
        projectId={data?.project.id!}
        projectName={data?.project.name!}
        projectLink={data?.project.inviteLink!}
        projectMembers={data?.members!}
				className={cn("mb-4")}
      />
			<ProjectMain projectId={data?.project.id!} boards={data?.boards!}/>
    </div>
  );
}
