import { DndCard } from "@/entities/card/_ui/dnd-card";
import { BoardWithDetailsDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";
import { DndContext, DragOverlay, closestCorners } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import React from "react";
import { createPortal } from "react-dom";
import { useDnd } from "../_vm/use-dnd";
import { CreateListForm } from "./create-list-form";
import { BoardList } from "./list";

export function BoardMain({
  className,
  board,
}: {
  className: string;
  board: BoardWithDetailsDto;
}) {
  const {
    sensors,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    activeList,
    activeCard,
  } = useDnd({ boardId: board.id });
  const items = React.useMemo(() => {
    return board.lists.map((i) => i.id);
  }, [board.lists]);

  return (
    <div className={cn(className)}>
      <DndContext
        autoScroll
        collisionDetection={closestCorners}
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <ol
          className={cn(
            "list-none absolute inset-0 flex flex-row min-h-full min-w-full overflow-x-auto scrollbar",
          )}
        >
          <SortableContext items={items}>
            {board?.lists.map((list, index) => (
              <BoardList listData={list} key={list.id} index={index} />
            ))}
          </SortableContext>
          <li className={cn("px-1.5 min-w-[272px] max-w-[272px]")}>
            <CreateListForm boardData={board} className={cn()} />
          </li>
        </ol>
        {createPortal(
          <DragOverlay>
            {activeList && <BoardList listData={activeList} />}
            {activeCard && <DndCard cardData={activeCard} />}
          </DragOverlay>,
          document.body,
        )}
      </DndContext>
    </div>
  );
}
