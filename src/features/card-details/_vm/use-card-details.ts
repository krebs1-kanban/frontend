import { useGetBoardByCardIdQuery } from "@/entities/board";
import { useGetCardByIdQuery } from "@/entities/card";
import { useMembersByProjectIdQuery } from "@/entities/project-member/_vm/use-members-by-project-id-query";

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
  const {
    data: membersData,
    isPending: isMembersPending,
    isError: isMembersError,
  } = useMembersByProjectIdQuery(boardData?.projectId!);

  return {
    cardData,
    boardData,
    membersData,
    isPending: cardIsPending || boardIsPending || isMembersPending,
    isError: cardIsError || boardIsError || isMembersError,
  };
};
