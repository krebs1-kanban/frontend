import { Button } from "@/shared/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";
import { cn } from "@/shared/ui/utils";
import { User } from "lucide-react";

export function HasExecutors({
  className,
  executorsNumber,
}: {
  className?: string;
  executorsNumber: number;
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={cn(className, "hover:bg-inherit p-0")}
            variant="ghost"
          >
            <User className={cn("h-4 w-4")} />
            <span>{executorsNumber}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>У этой карточки есть исполнители</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
