import { Button } from "@/shared/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";
import { cn } from "@/shared/ui/utils";
import { Text } from "lucide-react";

export function HasDescription({ className }: { className?: string }) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={cn(className, "hover:bg-inherit p-0")}
            variant="ghost"
          >
            <Text className={cn("h-4 w-4")} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>У этой карточки есть описание</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
