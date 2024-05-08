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
    </div>
  );
}
