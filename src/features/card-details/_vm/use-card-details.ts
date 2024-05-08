import { useGetBoardByCardIdQuery } from "@/entities/board";
import { useGetCardByIdQuery } from "@/entities/card";

export const useCardDetails = (cardId: string) => {
  const {
    data: cardData,
    isPending: cardIsPending,
    isError: cardIsError,
  } = useGetCardByIdQuery(cardId);
  const {
    data: boardData,
    isPending: boardIsPending,
    isError: boardIsError,
  } = useGetBoardByCardIdQuery(cardId);

  return {
    cardData,
    cardIsPending,
    cardIsError,
    boardData,
    boardIsPending,
    boardIsError,
  };
};
