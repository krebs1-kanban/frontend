import { Toggle } from "@/shared/ui/toggle";
import { cn } from "@/shared/ui/utils";
import { Archive } from "lucide-react";
import { useBoardArchived } from "../_vm/use-board-archived";

export function BoardArchived({
  className,
  boardId,
  isArchived,
}: {
  className?: string;
  boardId: string;
  isArchived: boolean;
}) {
  const { toggle, isPending } = useBoardArchived({ boardId });

  return (
    <Toggle
      disabled={isPending}
      className={cn("h-8 p-1.5 gap-x-2 text-sm font-normal")}
      pressed={isArchived}
      onPressedChange={toggle}
    >
      <Archive className={cn("h-5 w-5")} />
      {isArchived ? "Разархивировать" : "Архивировать"}
    </Toggle>
  );
}
