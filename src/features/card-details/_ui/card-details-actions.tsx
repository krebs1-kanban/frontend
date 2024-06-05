import { CardDto, CardDtoStatus } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { buttonVariants } from "@/shared/ui/button";
import { cn } from "@/shared/ui/utils";
import Link from "next/link";
import { useAddCover } from "../_vm/use-add-cover";
import { useArchiveCard } from "../_vm/use-archive-card";
import { useChangeStatus } from "../_vm/use-change-status";
import { AddCover } from "./add-cover";
import { ChangeStatus } from "./change-status";
import { ToggleArchive } from "./toggle-archive";

export function CardDetailsActions({
  className,
  cardData,
  boardId,
}: {
  className?: string;
  cardData: CardDto;
  boardId: string;
}) {
  const { addCover, isPending: addCoverIsPending } = useAddCover();
  const { archive, isPending: archiveCardIsPending } = useArchiveCard();
  const { changeStatus, isPending: changeStatusIsPending } = useChangeStatus();

  const handleCoverChange = (cover: string) => {
    addCover({ id: cardData.id, cover });
  };
  const handleArchiveToggle = (val: boolean) => {
    archive({ id: cardData.id, isArchived: val });
  };
  const handleStatusChange = (val: CardDtoStatus) => {
    changeStatus({ id: cardData.id, status: val });
  };

  return (
    <div className={cn(className)}>
      <div className={cn("flex flex-row flex-wrap justify-stretch gap-3")}>
        <Link
          href={`${ROUTES.BOARDS}/${boardId}`}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          К доске
        </Link>
        <ToggleArchive
          isArchived={cardData.isArchived}
          onToggle={handleArchiveToggle}
        />
        <AddCover
          cover={cardData.cover}
          onCoverChange={handleCoverChange}
          disabled={addCoverIsPending}
        />
        <ChangeStatus
          className={cn("w-36")}
          status={cardData.status}
          onStatusChange={handleStatusChange}
          disabled={changeStatusIsPending}
        />
      </div>
    </div>
  );
}
