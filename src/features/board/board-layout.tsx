"use client";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { cn } from "@/shared/ui/utils";
import { useEffect } from "react";
import { BoardHeader } from "./_ui/board-header";
import { BoardMain } from "./_ui/board-main";
import { useGetBoardById } from "./_vm/use-get-board-by-id";

export function BoardLayout({ boardId }: { boardId: string }) {
  const { data, isPending, isError, showArchieved, setShowArchieved } =
    useGetBoardById({
      boardId,
      params: { showArchived: false },
    });

  useEffect(() => {
    if (data?.name) document.title = data?.name!;
  }, [data?.name]);

  if (isPending) {
    return <FullPageSpinner isLoading aria-label="Загрузка доски" />;
  }

  if (isError) {
    return <div>Не удалось загрузить доску</div>;
  }

  return (
    <div className={cn(["grow min-h-full min-w-full flex flex-col"])}>
      <BoardHeader
        boardData={data!}
        togglesDefaultValues={{ showArchieved: showArchieved }}
        onShowArchievedToggle={(val) => {
          setShowArchieved(val);
        }}
      />
      <BoardMain className={cn("grow relative mt-3 mx-[10px]")} board={data!} />
    </div>
  );
}
