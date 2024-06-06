import { Button } from "@/shared/ui/button";
import { Calendar } from "@/shared/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { cn } from "@/shared/ui/utils";
import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";

export function AddDueDate({
  date,
  onChange,
  className,
  disabled,
}: {
  date: Date;
  onChange: (date: Date) => void;
  className?: string;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover open={open} onOpenChange={(e) => setOpen(e)}>
      <PopoverTrigger asChild className={cn(className)}>
        <Button variant={"outline"} disabled={disabled}>
          <CalendarIcon className={cn("w-4 h-4")} />
          <span className={cn("ml-2")}>Дедлайн</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date: Date | undefined) => {
            setOpen(false);
            onChange(date!);
          }}
          disabled={(date: Date) => date < new Date()}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
