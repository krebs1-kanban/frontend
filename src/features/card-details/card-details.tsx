"use client";

import { ROUTES } from "@/shared/constants/routes";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { cn } from "@/shared/ui/utils";
import Link from "next/link";
import { useEffect } from "react";
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

  return (
    <>
      <FullPageSpinner isLoading={isLoading} />
      {!isLoading && (
        <div className={cn("py-16")}>
          <div
            className={cn("max-w-3xl mx-auto border bg-card rounded-lg p-5")}
          >
            <CardDetailsHeader
              cardData={cardDetails.cardData!}
              className={cn("mb-5")}
            />
            <Link
              href={`${ROUTES.BOARDS}/${cardDetails.boardData?.id}`}
              className={cn("mb-5")}
            >
              К доске
            </Link>
            <div className={cn("w-full flex flex-row")}>
              <CardDetailsMain
                cardData={cardDetails.cardData!}
                tags={cardDetails.boardData?.tags!}
                boardId={cardDetails.boardData?.id!}
                className={cn("w-full max-w-full")}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
