import { BoardDto } from "@/shared/api/generated";
import { Toggle } from "@/shared/ui/toggle";
import { cn } from "@/shared/ui/utils";
import { Archive } from "lucide-react";
import { BoardActions } from "./board-actions";
import { BoardTitle } from "./board-title";

type togglesDefaultValues = {
  showArchieved: boolean;
};

export function BoardHeader({
  className,
  boardData,
  togglesDefaultValues,
  onShowArchievedToggle,
}: {
  className?: string;
  boardData: BoardDto;
  togglesDefaultValues: togglesDefaultValues;
  onShowArchievedToggle: (val: boolean) => void;
}) {
  return (
    <div
      className={cn(
        "px-3 py-2 border-b bg-card flex flex-row justify-between flex-wrap gap-4",
        className,
      )}
    >
      <div className={cn("flex flex-row flex-wrap items-center gap-x-4 max-w-full")}>
        <BoardTitle boardId={boardData.id} title={boardData.name} />
        {boardData.isArchived && (
          <span className={cn("text-xs font-normal text-foreground/60 px-2")}>
            Доска заархивирована
          </span>
        )}
      </div>
      <div className={cn("flex flex-row gap-x-4")}>
        <Toggle
          className={cn("w-8 h-8 p-1.5")}
          aria-label="Переключить отображение архивированных элементов"
          pressed={togglesDefaultValues.showArchieved}
          onPressedChange={onShowArchievedToggle}
        >
          <Archive className={cn("w-5 h-5")} />
        </Toggle>
        <BoardActions boardData={boardData} />
      </div>
    </div>
  );
}
