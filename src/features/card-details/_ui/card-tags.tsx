import { CardDto, TagDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";
import { Tag } from "lucide-react";
import { CardTag } from "./card-tag";
import { CreateTag } from "./create-tag";

export function CardTags({
  className,
  cardData,
  tags,
  boardId,
}: {
  className?: string;
  cardData: CardDto;
  tags: TagDto[];
  boardId: string;
}) {
  const handleClick = () => {};

  return (
    <div className={cn(className)}>
      <div className={cn("mb-3 flex flex-row justify-between gap-x-3")}>
        <h3 className={cn("flex flex-row gap-x-2 items-center")}>
          <Tag className={cn("w-6 h-6")} />
          Теги
        </h3>
      </div>
      <div className={cn("flex flex-wrap gap-1")}>
        {cardData.tags.map((tag) => (
          <CardTag
            tagData={tag}
            onClick={handleClick}
            className={cn("max-w-full truncate")}
            key={tag.id}
          />
        ))}
        <CreateTag cardData={cardData} tags={tags} boardId={boardId} />
      </div>
    </div>
  );
}
