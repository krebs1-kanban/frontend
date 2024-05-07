import { CardDto } from "@/shared/api/generated";
import { Card, CardContent, CardHeader } from "@/shared/ui/card";
import { cn } from "@/shared/ui/utils";
import { CardDescription } from "./_ui/card-description";
import { TagBadgeList } from "./_ui/tag-badge-list";

export function BoardCard({
  cardData,
  className,
}: {
  cardData: CardDto;
  className?: string;
}) {
  return (
    <li className={cn(className)}>
      <Card className={cn("px-3 pb-1 pt-2")}>
        <CardHeader className={cn("p-0 w-full")}>
          <TagBadgeList className={cn("mb-1")} tags={cardData.tags} />
          <h5
            className={cn(
              "w-full truncate text-sm font-semibold text-foreground/80 mb-1",
            )}
          >
            {cardData.name}
          </h5>
        </CardHeader>
        <CardContent className={cn("p-0")}>
          <CardDescription
            cardData={cardData}
            className={cn("mt-2 text-foreground/80")}
          />
        </CardContent>
      </Card>
    </li>
  );
}
