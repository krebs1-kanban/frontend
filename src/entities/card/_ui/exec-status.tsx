import {
  statusColors,
  statusNames,
  statuses,
} from "@/shared/constants/card-statuses";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";
import { cn } from "@/shared/ui/utils";

export function ExecutionStatus({
  status,
  className,
}: {
  status: statuses;
  className?: string;
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={cn(className, "border rounded-full")}
            style={{ backgroundColor: statusColors[status] }}
          ></button>
        </TooltipTrigger>
        <TooltipContent>
          <span>{statusNames[status]}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
