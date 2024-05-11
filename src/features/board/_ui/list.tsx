import { DndCard } from "@/features/board/_ui/dnd-card";
import { ListDto } from "@/shared/api/generated";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { cn } from "@/shared/ui/utils";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { MoreHorizontal } from "lucide-react";
import { CreateCardForm } from "./create-card-form";
import { ListTitle } from "./list-title";

export function BoardList({
  listData,
  index,
}: {
  listData: ListDto;
  index?: number;
}) {
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
                  className={cn(
                    "mr-2 flex-grow flex-shrink basis-[min-content]",
                  )}
                />
                <Button
                  variant="ghost"
                  className={cn(
                    "w-8 h-8 p-2 self-center flex-shrink-0 flex-grow-0 space-y-0",
                  )}
                  style={{ marginTop: "0" }}
                >
                  <MoreHorizontal />
                </Button>
              </CardHeader>
              <Droppable droppableId={listData.id} type="card">
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
                        <DndCard cardData={card} index={index} key={card.id} />
                      ))}
                      {provided.placeholder}
                    </ol>
                  </CardContent>
                )}
              </Droppable>
              <CardFooter className={cn("p-2 pb-0")}>
                <CreateCardForm
                  listData={listData}
                  className={cn("min-w-100 flex-grow")}
                />
              </CardFooter>
            </Card>
          </div>
        </li>
      )}
    </Draggable>
  );
}
