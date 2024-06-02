import { useDeleteTagMutation } from "@/entities/tag/_vm/queries";
import { TagDto } from "@/shared/api/generated";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { cn } from "@/shared/ui/utils";
import { Trash2 } from "lucide-react";
import { useChangeSelectTag } from "../_vm/use-select-tag";
import { UpdateTagForm } from "./update-tag-form";

export function SelectTag({
  className,
  tag,
  cardId,
}: {
  className?: string;
  tag: { selected: boolean; tag: TagDto };
  cardId: string;
}) {
  const { execute } = useChangeSelectTag();
  const { mutate, isPending } = useDeleteTagMutation();

  const handleChange = (tagId: string, current: boolean) => {
    execute({ cardId, tagId, current });
  };
  const handleDelete = () => {
    mutate({ id: tag.tag.id });
  };

  return (
    <div
      className={cn("flex flex-row gap-x-2 items-start", "w-full max-w-full")}
    >
      <Checkbox
        className={cn("w-4 h-4 m-2 flex-grow-0")}
        checked={tag.selected}
        onCheckedChange={(e) => {
          handleChange(tag.tag.id, tag.selected);
        }}
      />
      <UpdateTagForm tag={tag.tag} className={cn("w-full max-w-full flex-1")} />
      <Button
        variant={"ghost"}
        className={cn(
          "font-medium text-sm leading-4 p-2 h-8 w-8 flex-grow-0",
        )}
        disabled={isPending}
        onClick={handleDelete}
      >
        <Trash2 className={cn("w-4 h-4")} />
      </Button>
    </div>
  );
}
