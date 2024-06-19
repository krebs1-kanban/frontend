import { BoardDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";
import { BoardItem } from "./board-item";
import { CreateBoard } from "./create-board";

export function BoardsList({
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
    <ul className={cn("flex flex-row flex-wrap w-full")}>
      {boards?.map((item) => (
        <li
          className={cn("p-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4")}
          key={item.id}
        >
          <BoardItem key={item.id} board={item} />
        </li>
      ))}
      {canCreateBoard && <CreateBoard projectId={projectId} />}
    </ul>
  );
}
