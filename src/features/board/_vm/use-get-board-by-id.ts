import { useGetBoardByIdQuery } from "@/entities/board";
import { useRoleByBoardIdQuery } from "@/entities/project-member";
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

  const {
    data: boardData,
    isPending: isBoardPending,
    isError: isBoardError,
    isSuccess: isBoardSuccess,
    refetch: boardRefetch,
  } = useGetBoardByIdQuery(boardId, { showArchived: showArchieved });

  const {
    data: roleData,
    isPending: isRolePending,
    isError: isRoleError,
    isSuccess: isRoleSuccess,
  } = useRoleByBoardIdQuery(boardData?.id!);

  React.useEffect(() => {
    boardRefetch();
  }, [showArchieved]);

  return {
    data: { boardData, yourRole: roleData?.role },
    isPending: isBoardPending || isRolePending,
    isError: isBoardError || isRoleError,
    isSuccess: isBoardSuccess && isRoleSuccess,
    boardId,
    setBoardId,
    showArchieved,
    setShowArchieved,
  };
};
