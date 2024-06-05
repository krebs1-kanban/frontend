import { TagDto } from "@/shared/api/generated"
import { Button } from '@/shared/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip"
import { cn } from "@/shared/ui/utils"

export function TagBadge({
  tagData,
  className,
}: {
  tagData: TagDto;
  className?: string;
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={cn(className, "border")}
            style={{ backgroundColor: tagData?.color as string }}
          />
        </TooltipTrigger>
        <TooltipContent>
          <span>{tagData.name}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
