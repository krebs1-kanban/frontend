import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/ui/utils";
import React from "react";
import { useRenameBoard } from "../_vm/use-rename-board";

export function BoardTitle({
  className,
  boardId,
  title,
  canRename = false,
}: {
  className?: string;
  boardId: string;
  title: string;
  canRename?: boolean;
}) {
  const [newName, setNewName] = React.useState<string>(title);
  const { rename, isPending } = useRenameBoard({ boardId });

  if (!canRename)
    return (
      <h1
        className={cn(
          className,
          "p-0 font-bold text-lg leading-8 border-none max-w-full w-min h-8 px-2 truncate",
        )}
      >
        {title}
      </h1>
    );

  return (
    <div className={cn("max-w-full w-full", className)}>
      <h1 className={cn("hidden")}>{title}</h1>
      <Input
        className={cn(
          "p-0 font-bold text-lg leading-8 border-none max-w-full w-min h-8 px-2 truncate",
        )}
        onBlur={() => rename({ name: newName })}
        value={newName}
        onChange={(e) => setNewName(() => e.target.value)}
        disabled={isPending}
      />
    </div>
  );
}
