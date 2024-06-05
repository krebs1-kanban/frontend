import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/ui/utils";
import { ArchiveIcon } from "lucide-react";

export function ToggleArchive({
  className,
  isArchived,
  disabled,
  onToggle,
}: {
  className?: string;
  isArchived: boolean;
  disabled?: boolean;
  onToggle: (val: boolean) => void;
}) {
  return (
    <Button
      variant={"outline"}
      className={cn(className)}
      disabled={disabled}
      onClick={() => onToggle(!isArchived)}
    >
      <ArchiveIcon className={cn("w-4 h-4")} />
      <span className={cn("ml-2")}>
        {isArchived ? "Восстановить" : "Архивировать"}
      </span>
    </Button>
  );
}
