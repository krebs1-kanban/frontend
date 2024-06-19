import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/ui/utils";
import React from "react";
import { useRename } from "../_vm/use-rename";

export function ProjectTitle({
  projectId,
  projectName,
  canEdit = false,
  className,
}: {
  projectId: string;
  projectName: string;
  canEdit?: boolean;
  className?: string;
}) {
  const [newName, setNewName] = React.useState<string>(projectName);
  const { rename, isPending } = useRename();

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (newName === "") setNewName(() => projectName);
    else rename({ projectId, name: newName });
  };

  if (!canEdit)
    return (
      <h1
        className={cn(
          "p-0 font-bold text-lg leading-8 border-none max-w-full w-min h-8 px-2 truncate",
        )}
      >
        {projectName}
      </h1>
    );

  return (
    <div className={cn("max-w-full w-full", className)}>
      <h1 className={cn("hidden")}>{projectName}</h1>
      <Input
        className={cn(
          "p-0 font-bold text-lg leading-8 border-none max-w-full w-min h-8 px-2 truncate",
        )}
        onBlur={handleBlur}
        value={newName}
        onChange={(e) => setNewName(() => e.target.value)}
        disabled={isPending}
      />
    </div>
  );
}
