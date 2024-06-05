"use client";

import { ROUTES } from "@/shared/constants/routes";
import { Dialog, DialogContent, DialogHeader } from "@/shared/ui/dialog";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { cn } from "@/shared/ui/utils";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { CardDetailsHeader } from "./_ui/card-details-header";
import { CardDetailsMain } from "./_ui/card-details-main";
import { useCardDetails } from "./_vm/use-card-details";

export function CardDetailsModal({ cardId }: { cardId: string }) {
  const [open, setOpen] = React.useState<boolean>(true);
  const router = useRouter();

  const cardDetails = useCardDetails(cardId);

  useEffect(() => {
    if (cardDetails.cardData?.name) document.title = cardDetails.cardData?.name;
  }, [cardDetails.cardData?.name]);

  const isLoading = cardDetails.cardIsPending || cardDetails.boardIsPending;
  const isError = cardDetails.cardIsError || cardDetails.boardIsError;

  const handleOpenChange = (val: boolean) => {
    setOpen(val);
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
      <DialogContent
        className={cn(
          "min-w-[320px] w-full max-w-3xl",
          "min-h-[386px] h-full max-h-[512px]",
        )}
      >
        <DialogHeader />
        <div
          className={cn(
            "w-full max-w-full",
            "h-full overflow-y-auto scrollbar p-2",
          )}
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
