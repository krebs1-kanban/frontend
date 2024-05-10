import { useAttachFileMutation } from "@/entities/card";
import { Button } from "@/shared/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { cn } from "@/shared/ui/utils";
import { Plus } from "lucide-react";
import React from "react";

export function UploadFile({
  className,
  cardId,
}: {
  className?: string;
  cardId: string;
}) {
  const [open, setOpen] = React.useState<boolean>(false);
  const { mutate } = useAttachFileMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    if (e.target.files && e.target.files.length) {
      console.log(1)
      mutate({ id: cardId, files: e.target.files });
    }
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={(e) => setOpen(e)}>
      <PopoverTrigger asChild>
        <Button className={cn("w-8 h-8 p-2")} variant="outline">
          <Plus className={cn("w-4 h-4")} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className={cn("flex flex-col")}>
          <label
            className={cn(
              "w-full px-3 py-1.5 text-sm rounded border cursor-pointer flex items-center justify-center",
            )}
          >
            <input
              className={cn("hidden")}
              type="file"
              multiple
              onChange={handleChange}
            />
            Добавить файл
          </label>
        </div>
      </PopoverContent>
    </Popover>
  );
}
