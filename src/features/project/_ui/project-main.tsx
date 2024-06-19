import { BoardDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";
import { BoardsList } from "./boards-list";

export function ProjectMain({
  projectId,
  boards,
  canCreateBoard = false,
  className,
}: {
  projectId: string;
  boards: BoardDto[];
  canCreateBoard?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-row container", className)}>
      <BoardsList
        projectId={projectId}
        boards={boards}
        canCreateBoard={canCreateBoard}
      />
    </div>
  );
}
