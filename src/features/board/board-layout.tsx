"use client";
import { ROUTES } from "@/shared/constants/routes";
import { getProjectAbilities } from "@/shared/lib/get-project-abilities";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { cn } from "@/shared/ui/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { BoardHeader } from "./_ui/board-header";
import { BoardMain } from "./_ui/board-main";
import { useGetBoardById } from "./_vm/use-get-board-by-id";

export function BoardLayout({ boardId }: { boardId: string }) {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isPending, isError, showArchieved, setShowArchieved } =
    useGetBoardById({
      boardId,
      params: { showArchived: params?.get("showArchived") === "true" },
    });

  useEffect(() => {
    if (data?.boardData?.name!) document.title = data?.boardData?.name!;
  }, [data?.boardData?.name!]);

  if (isPending) {
    return <FullPageSpinner isLoading aria-label="Загрузка доски" />;
  }

  if (isError) {
    return <div>Не удалось загрузить доску</div>;
  }

  const abilities = getProjectAbilities(data?.yourRole!);
  console.log(abilities);

  return (
    <div className={cn(["grow min-h-full min-w-full flex flex-col"])}>
      <BoardHeader
        boardData={data?.boardData!}
        togglesDefaultValues={{ showArchieved: showArchieved }}
        canArchive={abilities.ARCHIVE_BOARD}
        canRename={abilities.RENAME_BOARD}
        onShowArchievedToggle={(val) => {
          router.replace(
            `${ROUTES.BOARDS}/${data?.boardData?.id}?showArchived=${val}`,
          );
          setShowArchieved(val);
        }}
      />
      <BoardMain
        className={cn("grow relative mt-3 mx-[10px]")}
        board={data?.boardData!}
        canCreateList={abilities.CREATE_LIST}
        canRenameList={abilities.RENAME_LIST}
        canArchiveList={abilities.ARCHIVE_LIST}
        canCreateCard={abilities.CREATE_CARD}
        canArchiveCard={abilities.ARCHIVE_CARD}
      />
    </div>
  );
}
