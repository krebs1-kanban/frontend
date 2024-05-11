import { useUpdateBoardMutation } from "@/entities/board";
import React from "react";

export const useRenameBoard = ({
  boardId: defaultBoardId,
}: {
  boardId: string;
}) => {
  const [boardId, setBoardId] = React.useState<string>(defaultBoardId);

  const { mutate, isPending, isError, isSuccess } = useUpdateBoardMutation();

  const rename = React.useCallback(
    ({ name }: { name: string }) => {
      mutate({ id: boardId, name });
    },
    [boardId, mutate],
  );

  return {
    rename,
    isPending,
    isError,
    isSuccess,
    boardId,
    setBoardId,
  };
};
