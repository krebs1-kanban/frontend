import { Button } from "@/shared/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";
import { cn } from "@/shared/ui/utils";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { Clock } from "lucide-react";

export function HasDate({
  className,
  dueDateTime,
}: {
  className?: string;
  dueDateTime: string;
}) {
  const displayDate = dayjs(dueDateTime).locale('ru').format("D MMM");

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={cn(
              className,
              "hover:bg-inherit flex fle-row gap-x-1 items-center p-0",
            )}
            variant="ghost"
          >
            <Clock className={cn("h-4 w-4")} />
            {displayDate}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>У этой карточки есть дата выполнения</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
