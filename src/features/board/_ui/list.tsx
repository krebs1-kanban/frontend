import { DndCard } from "@/features/board/_ui/dnd-card"
import { ListDto } from "@/shared/api/generated"
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card"
import { Toggle } from "@/shared/ui/toggle"
import { cn } from "@/shared/ui/utils"
import { Draggable, Droppable } from "@hello-pangea/dnd"
import { Archive } from "lucide-react"
import { useToggleListArchive } from "../_vm/use-toggle-list-archive"
import { CreateCardForm } from "./create-card-form"
import { ListTitle } from "./list-title"

export function BoardList({
  listData,
  index,
  canRenameList = false,
  canArchiveList = false,
  canCreateCard = false,
  canArchiveCard = false,
}: {
  listData: ListDto;
  index?: number;
  canRenameList?: boolean;
  canArchiveList?: boolean;
  canCreateCard?: boolean;
  canArchiveCard?: boolean;
}) {
  const { toggle, isToggleListPending } = useToggleListArchive(listData.id);

  return (
    <Draggable draggableId={listData.id} index={listData.index}>
      {(provided) => (
        <li
          className={cn(
            "px-1.5 pb-3 h-full min-w-[272px] max-w-[272px] list-none",
          )}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className={cn("max-h-full h-full")}>
            <Card
              className={cn(
                "max-h-full flex flex-col pb-2",
                listData.isArchived && "border-destructive",
              )}
              {...provided.dragHandleProps}
            >
              <CardHeader
                className={cn(
                  "flex flex-row justify-between items-center p-2 pb-0 flex-grow-0 flex-wrap",
                )}
              >
                <ListTitle
                  listData={listData}
                  canRename={canRenameList}
                  className={cn(
                    "mr-2 flex-grow flex-shrink basis-[min-content]",
                  )}
                />
                <Toggle
                  className={cn(
                    "w-8 h-8 p-2 self-center flex-shrink-0 flex-grow-0 space-y-0",
                  )}
                  style={{ marginTop: "0" }}
                  pressed={listData.isArchived}
                  disabled={isToggleListPending || !canArchiveList}
                  onPressedChange={toggle}
                >
                  <Archive className={cn("w-4 h-4")} />
                </Toggle>
              </CardHeader>
              <Droppable
                droppableId={listData.id}
                type="card"
                direction="vertical"
              >
                {(provided) => (
                  <CardContent
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={cn(
                      "p-2 pb-0 overflow-x-hidden overflow-y-auto scrollbar  shrink grow basis-auto h-full",
                    )}
                  >
                    <ol
                      className={cn("list-none flex flex-col w-full gap-y-2")}
                    >
                      {listData.cards.map((card, index) => (
                        <DndCard cardData={card} index={index} key={card.id} canArchive={canArchiveCard} />
                      ))}
                      {provided.placeholder}
                    </ol>
                  </CardContent>
                )}
              </Droppable>
              {canCreateCard && (
                <CardFooter className={cn("p-2 pb-0")}>
                  <CreateCardForm
                    listData={listData}
                    className={cn("min-w-100 flex-grow")}
                  />
                </CardFooter>
              )}
            </Card>
          </div>
        </li>
      )}
    </Draggable>
  );
}
