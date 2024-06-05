import { CardDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";
import { CardTitle } from "./card-title";

export function CardDetailsHeader({
  className,
  cardData,
}: {
  className?: string;
  cardData: CardDto;
}) {
  return (
    <div className={cn(className)}>
      <CardTitle cardData={cardData} />
      {cardData.isArchived && (
        <span className={cn("text-xs font-normal text-foreground/60 mt-2")}>
          Карточка заархивирована
        </span>
      )}
    </div>
  );
}
