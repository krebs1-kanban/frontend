import { ProjectDto } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/ui/utils";
import Link from "next/link";

export function Project({
  className,
  project,
}: {
  className?: string;
  project: ProjectDto;
}) {
  return (
    <Link
      href={`${ROUTES.PROJECTS}/${project.id}`}
      className={cn("block w-full")}
    >
      <div
        className={cn(
          "h-[104px] p-2 rounded-lg flex flex-col justify-between w-full border",
        )}
      >
        <div className={cn("max-w-full")}>
          <h5 className={cn("max-w-full truncate font-bold text-base")}>
            {project.name}
          </h5>
        </div>
      </div>
    </Link>
  );
}
