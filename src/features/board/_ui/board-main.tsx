import { BoardWithDetailsDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useDnd } from "../_vm/use-dnd";
import { CreateListForm } from "./create-list-form";
import { BoardList } from "./list";

export function BoardMain({
  className,
  board,
  canCreateList = false,
  canRenameList = false,
  canArchiveList = false,
  canCreateCard = false,
  canArchiveCard = false,
}: {
  className: string;
  board: BoardWithDetailsDto;
  canCreateList?: boolean;
  canRenameList?: boolean;
  canArchiveList?: boolean;
  canCreateCard?: boolean;
  canArchiveCard?: boolean;
}) {
  const { handleDragEnd } = useDnd({ boardId: board.id });

  return (
    <div className={cn(className, "overflow-x-auto scrollbar")}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="lists" type="list" direction="horizontal">
          {(provided) => (
            <ol
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={cn(
                "list-none absolute inset-0 flex flex-row min-h-full min-w-full",
              )}
            >
              {board?.lists.map((list, index) => (
                <BoardList
                  listData={list}
                  key={list.id}
                  index={index}
                  canRenameList={canRenameList}
                  canArchiveList={canArchiveList}
                  canCreateCard={canCreateCard}
                  canArchiveCard={canArchiveCard}
                />
              ))}
              {provided.placeholder}
              {canCreateList && (
                <li className={cn("px-1.5 min-w-[272px] max-w-[272px]")}>
                  <CreateListForm boardData={board} className={cn()} />
                </li>
              )}
            </ol>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
