import { CardDto, TagDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";
import { CardAttachments } from "./card-attachments";
import { CardDescription } from "./card-description";
import { CardTags } from "./card-tags";

export function CardDetailsMain({
  className,
  cardData,
  tags,
  boardId
}: {
  className?: string;
  cardData: CardDto;
  tags: TagDto[];
  boardId: string;
}) {
  return (
    <div className={cn(className)}>
      <CardTags
        className={cn("mb-3")}
        cardData={cardData}
        tags={tags}
        boardId={boardId}
      />
      <CardDescription className={cn("mb-3")} cardData={cardData} />
      <CardAttachments cardData={cardData} />
    </div>
  );
}
