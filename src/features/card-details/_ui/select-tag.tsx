import { TagDto } from "@/shared/api/generated";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { cn } from "@/shared/ui/utils";
import { Edit2 } from "lucide-react";
import React from "react";
import { useChangeSelectTag } from "../_vm/use-select-tag";

export function SelectTag({
  className,
  tag,
  cardId,
}: {
  className?: string;
  tag: { selected: boolean; tag: TagDto };
  cardId: string;
}) {
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const { execute } = useChangeSelectTag();

  const handleChange = (tagId: string, current: boolean) => {
    execute({ cardId, tagId, current });
  };

  return (
    <div className={cn("flex flex-row gap-x-2 items-start max-w-full")}>
      <Checkbox
        className={cn("w-4 h-4 m-2")}
        checked={tag.selected}
        onCheckedChange={(e) => {
          handleChange(tag.tag.id, tag.selected);
        }}
      />
      <Button
        style={{
          backgroundColor: tag.tag.color ?? "transparent",
        }}
        variant={tag.tag.color ? "default" : "outline"}
        className={cn(
          "font-medium text-sm leading-4 truncate p-2 h-8 inline-block min-w-12 max-w-full w-full relative",
        )}
      >
        {tag.tag.name}
      </Button>
      <Button
        className={cn("w-8 h-8 p-2")}
        variant="ghost"
        onClick={() => {
          setIsEdit((val) => !val);
        }}
      >
        <Edit2 className={cn("w-4 h-4")} />
      </Button>
    </div>
  );
}
