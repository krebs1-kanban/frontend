"use client";

import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { cn } from "@/shared/ui/utils";
import { CreateProject } from "./_ui/create-project";
import { Project } from "./_ui/project";
import { useOwnProjects } from "./_vm/use-own-projects";

export function Projects() {
  const { data, isPending, isError } = useOwnProjects();

  if (isPending) {
    return <FullPageSpinner isLoading />;
  }

  if (isError) {
    return <h2>Ошибка загрузки проекта.</h2>;
  }

  return (
    <div className={cn("flex flex-row w-full")}>
      <ul className={cn("flex flex-row flex-wrap w-full")}>
        {data?.map((item) => (
          <li
            className={cn("p-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4")}
            key={item.id}
          >
            <Project project={item} />
          </li>
        ))}
        <CreateProject />
      </ul>
    </div>
  );
}
