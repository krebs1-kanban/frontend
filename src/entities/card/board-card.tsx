import { CardDto } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { Card, CardContent, CardHeader } from "@/shared/ui/card";
import { cn } from "@/shared/ui/utils";
import Link from "next/link";
import { CardDescription } from "./_ui/card-description";
import { ExecutionStatus } from "./_ui/exec-status";
import { TagBadgeList } from "./_ui/tag-badge-list";

export function BoardCard({
  cardData,
  className,
  canArchive = false,
}: {
  cardData: CardDto;
  className?: string;
  canArchive?: boolean;
}) {
  return (
    <Card
      className={cn("pb-1 pt-0", cardData.isArchived && "border-destructive")}
    >
      <div
        className={cn("rounded-t-lg flex flex-col px-3 py-2")}
        style={{
          height: cardData.cover ? "3rem" : "1.75rem",
          backgroundColor: cardData.cover ? cardData.cover : "transparent",
        }}
      >
        <div className={cn("w-full flex justify-end")}>
          <ExecutionStatus status={cardData.status} className={cn("w-3 h-3")} />
        </div>
      </div>
      <div className={cn("px-3")}>
        <CardHeader className={cn("p-0 w-full")}>
          <TagBadgeList className={cn("mb-1 mt-2")} tags={cardData.tags} />
          <Link
            href={`${ROUTES.CARD}/${cardData.id}`}
            className={cn(className)}
          >
            <h5
              className={cn(
                "w-full truncate text-sm font-semibold text-foreground/80 mb-1",
              )}
            >
              {cardData.name}
            </h5>
          </Link>
        </CardHeader>
        <CardContent className={cn("p-0")}>
          <CardDescription
            cardData={cardData}
            className={cn("mt-2 text-foreground/80")}
            canArchive={canArchive}
          />
        </CardContent>
      </div>
    </Card>
  );
}
