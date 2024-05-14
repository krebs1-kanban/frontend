import { useUpdateBoardMutation } from "@/entities/board";
import React from "react";

export const useBoardArchived = ({ boardId }: { boardId: string }) => {
  const { mutate, isPending, isError, isSuccess } = useUpdateBoardMutation();

  const toggle = React.useCallback(
    (val: boolean) => {
      mutate({ id: boardId, isArchived: val });
    },
    [boardId, mutate],
  );

  return {
    toggle,
    isPending,
    isError,
    isSuccess,
  };
};
