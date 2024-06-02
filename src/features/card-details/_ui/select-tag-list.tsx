import { TagDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";
import { SelectTag } from "./select-tag";

export function SelectTagList({
  className,
  tags,
  cardId,
}: {
  className?: string;
  tags: { selected: boolean; tag: TagDto }[];
  cardId: string;
}) {
  return (
    <div
      className={cn(className, "flex flex-col gap-y-2", "w-full max-w-full")}
    >
      {tags.map((tag) => (
        <SelectTag cardId={cardId} tag={tag} key={tag.tag.id} />
      ))}
    </div>
  );
}
