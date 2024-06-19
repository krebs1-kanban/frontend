import { BoardDto } from "@/shared/api/generated";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { cn } from "@/shared/ui/utils";
import { MoreHorizontal } from "lucide-react";
import { BoardArchived } from "./board-archived";

export function BoardActions({
  className,
  boardData,
  canArchive = false,
}: {
  className?: string;
  boardData: BoardDto;
  canArchive?: boolean;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn("w-8 h-8 p-1.5", className)} asChild>
        <Button variant="ghost">
          <MoreHorizontal className={cn("w-5 h-5")} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Действия на доске</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <BoardArchived
            boardId={boardData.id}
            isArchived={boardData.isArchived}
            canArchive={canArchive}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
