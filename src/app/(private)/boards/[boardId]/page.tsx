import { BoardLayout } from "@/features/board/board-layout";
import { cn } from "@/shared/ui/utils";

export const metadata = {
  title: "Загрузка доски",
};

export default function BoardPage({ params }: { params: { boardId: string } }) {
  return (
    <main className={cn("grow flex")}>
      <BoardLayout boardId={params.boardId} />
    </main>
  );
}
