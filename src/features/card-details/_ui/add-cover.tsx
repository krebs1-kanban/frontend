import { Button } from "@/shared/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { SelectColor } from "@/shared/ui/select-color";
import { cn } from "@/shared/ui/utils";
import { PanelTop } from "lucide-react";
import { useState } from "react";

export function AddCover({
  className,
  cover,
  onCoverChange,
  disabled,
}: {
  className?: string;
  onCoverChange: (cover: string) => void;
  cover: string;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover open={open} onOpenChange={(e) => setOpen(e)}>
      <PopoverTrigger asChild className={cn(className)}>
        <Button variant={"outline"} disabled={disabled}>
          <PanelTop className={cn("w-4 h-4")} />
          <span className={cn("ml-2")}>Обложка</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <SelectColor
          color={cover}
          onChange={(color) => {
            setOpen(false);
            onCoverChange(color);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
