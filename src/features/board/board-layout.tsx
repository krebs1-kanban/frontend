"use client";
import { useGetBoardByIdQuery } from "@/entities/board";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { cn } from "@/shared/ui/utils";
import { BoardMain } from "./_ui/board-main";

export function BoardLayout({ boardId }: { boardId: string }) {
  const boardQuery = useGetBoardByIdQuery(boardId);

  if (boardQuery.isPending) {
    return <FullPageSpinner isLoading aria-label="Загрузка доски" />;
  }

  if (!boardQuery.data) {
    <div>Не удалось загрузить доску</div>;
  }

  return (
    <div className={cn(["grow min-h-full min-w-full flex flex-col"])}>
      <BoardMain
        className={cn("grow relative mt-3 mx-[10px]")}
        board={boardQuery.data!}
      />
    </div>
  );
}
