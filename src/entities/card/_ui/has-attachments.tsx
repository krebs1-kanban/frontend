import { Button } from "@/shared/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";
import { cn } from "@/shared/ui/utils";
import { Paperclip } from "lucide-react";

export function HasAttachments({
  className,
  attachmentsCount,
}: {
  className?: string;
  attachmentsCount: number;
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={cn(className, "hover:bg-inherit p-0 gap-x-1")}
            variant="ghost"
          >
            <Paperclip className={cn("h-4 w-4")} />
            {attachmentsCount}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>У этой карточки есть прикрепленные файлы</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
