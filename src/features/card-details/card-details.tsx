"use client";

import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { cn } from "@/shared/ui/utils";
import { useEffect } from "react";
import { CardDetailsActions } from "./_ui/card-details-actions";
import { CardDetailsHeader } from "./_ui/card-details-header";
import { CardDetailsMain } from "./_ui/card-details-main";
import { useCardDetails } from "./_vm/use-card-details";

export function CardDetails({
  cardId,
  className,
}: {
  cardId: string;
  className?: string;
}) {
  const cardDetails = useCardDetails(cardId);

  useEffect(() => {
    if (cardDetails.cardData?.name)
      document.title = cardDetails.cardData?.name!;
  }, [cardDetails.cardData?.name]);

  const isLoading = cardDetails.cardIsPending || cardDetails.boardIsPending;
  const isError = cardDetails.cardIsError || cardDetails.boardIsError;

  if (isError) {
    return <h2>Ошибка при загрузке</h2>;
  }

  if (isLoading) {
    return <FullPageSpinner isLoading={isLoading} />;
  }

  return (
    <div className={cn("py-16")}>
      <div className={cn("max-w-3xl mx-auto border bg-card rounded-lg p-0")}>
        {cardDetails.cardData?.cover && (
          <div
            className={cn("w-full h-10 mb-5 rounded-t-lg")}
            style={{ backgroundColor: cardDetails.cardData?.cover }}
          ></div>
        )}
        <div className={cn("p-5 pt-0")}>
          <CardDetailsHeader
            cardData={cardDetails.cardData!}
            className={cn("mb-5")}
          />
          <CardDetailsActions
            cardData={cardDetails.cardData!}
            boardId={cardDetails.boardData?.id!}
            className={cn("mb-5")}
          />
          <CardDetailsMain
            cardData={cardDetails.cardData!}
            tags={cardDetails.boardData?.tags!}
            boardId={cardDetails.boardData?.id!}
            className={cn("w-full max-w-full", "flex flex-col")}
          />
        </div>
      </div>
    </div>
  );
}
