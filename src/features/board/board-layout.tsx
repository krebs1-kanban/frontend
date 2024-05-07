"use client";
import { useBoardByIdQuery } from "@/entities/board";
import { Spinner } from "@/shared/ui/spinner";
import { cn } from "@/shared/ui/utils";
import { CreateListForm } from "./_ui/create-list-form";
import { BoardList } from "./_ui/list";

export function BoardLayout({ boardId }: { boardId: string }) {
  const boardQuery = useBoardByIdQuery(boardId);

  if (boardQuery.isPending) {
    return <Spinner aria-label="Загрузка профиля" />;
  }

  if (!boardQuery.data) {
    <div>Не удалось загрузить доску</div>;
  }

  return (
    <div
      className={cn(["grow min-h-full min-w-full flex flex-col"])}
    >
      <div className={cn(["grow relative mt-3"])}>
        <ol
          className={cn(
            "list-none absolute inset-0 flex flex-row min-h-full min-w-full overflow-x-auto scrollbar",
          )}
        >
          {boardQuery.data?.lists.map((list) => (
            <BoardList listData={list} key={list.id} />
          ))}
          <li className={cn("px-1.5 min-w-[272px] max-w-[272px]")}>
            <CreateListForm boardData={boardQuery.data!} className={cn()} />
          </li>
        </ol>
      </div>
    </div>
  );
}
