"use client";

import { ROUTES } from "@/shared/constants/routes";
import { Dialog, DialogContent, DialogHeader } from "@/shared/ui/dialog";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { cn } from "@/shared/ui/utils";
import { useRouter } from "next/navigation";
import React from "react";
import { CardDetailsHeader } from "./_ui/card-details-header";
import { CardDetailsMain } from "./_ui/card-details-main";
import { useCardDetails } from "./_vm/use-card-details";

export function CardDetailsModal({ cardId }: { cardId: string }) {
  const [open, setOpen] = React.useState<boolean>(true);
  const router = useRouter();

  const cardDetails = useCardDetails(cardId);

  const isLoading = cardDetails.cardIsPending || cardDetails.boardIsPending;
  const isError = cardDetails.cardIsError || cardDetails.boardIsError;

  const handleOpenChange = (val: boolean) => {
    if (!val) router.replace(`${ROUTES.BOARDS}/${cardDetails.boardData?.id}`);
  };

  if (isLoading) {
    return <FullPageSpinner isLoading={true} />;
  }

  if (isError) {
    return <h2>Ошибка при загрузке</h2>;
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className={cn("w-full h-full max-h-96")}>
        <DialogHeader />
        <div
          className={cn("max-w-[462px] h-full overflow-y-auto scrollbar p-2")}
        >
          <CardDetailsHeader
            cardData={cardDetails.cardData!}
            className={cn("mb-5")}
          />
          <CardDetailsMain
            cardData={cardDetails.cardData!}
            tags={cardDetails.boardData?.tags!}
            boardId={cardDetails.boardData?.id!}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}