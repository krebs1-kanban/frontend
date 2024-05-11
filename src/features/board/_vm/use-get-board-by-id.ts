import { useGetBoardByIdQuery } from "@/entities/board";
import { BoardControllerGetByIdParams } from "@/shared/api/generated";
import React from "react";

export const useGetBoardById = ({
  boardId: boardIdDefault,
  params: paramsDefault,
}: {
  boardId: string;
  params: BoardControllerGetByIdParams;
}) => {
  const [boardId, setBoardId] = React.useState<string>(boardIdDefault);
  const [showArchieved, setShowArchieved] = React.useState<boolean>(
    paramsDefault.showArchived!,
  );

  const { data, isPending, isError, isSuccess, refetch } = useGetBoardByIdQuery(
    boardId,
    { showArchived: showArchieved },
  );

  React.useEffect(() => {
    refetch();
  }, [showArchieved]);

  return {
    data,
    isPending,
    isError,
    isSuccess,
    boardId,
    setBoardId,
    showArchieved,
    setShowArchieved,
  };
};
