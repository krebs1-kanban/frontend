import { BoardDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";
import { BoardsList } from "./boards-list";

export function ProjectMain({
  projectId,
  boards,
  className,
}: {
  projectId: string;
  boards: BoardDto[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-row container", className)}>
      <BoardsList projectId={projectId} boards={boards} />
    </div>
  );
}
