import { DndCard } from "@/entities/card/_ui/dnd-card";
import { ListDto } from "@/shared/api/generated";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { cn } from "@/shared/ui/utils";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { CreateCardForm } from "./create-card-form";
import { ListTitle } from "./list-title";

export function BoardList({
  listData,
  index,
}: {
  listData: ListDto;
  index?: number;
}) {
  const {
    attributes,
    setNodeRef,
    setActivatorNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
    isOver,
  } = useSortable({
    id: listData.id,
    data: {
      type: "list",
      listData,
      index,
    },
  });

  const items = React.useMemo(() => {
    return listData.cards.map((i) => i.id);
  }, [listData.cards]);

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <li
      className={cn(
        "px-1.5 pb-3 min-h-full min-w-[272px] max-w-[272px] list-none",
      )}
      style={style}
      ref={setNodeRef}
    >
      <Card
        className={cn(
          "max-h-full flex flex-col pb-2",
          isDragging && "opacity-50",
        )}
      >
        <CardHeader
          {...listeners}
          {...attributes}
          ref={setActivatorNodeRef}
          className={cn(
            "flex flex-row justify-between items-center p-2 pb-0 flex-grow-0 flex-wrap",
          )}
        >
          <ListTitle
            listData={listData}
            className={cn("mr-2 flex-grow flex-shrink basis-[min-content]")}
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
        <CardContent
          className={cn(
            "p-2 pb-0 overflow-x-hidden overflow-y-auto shrink grow basis-auto h-full scrollbar",
          )}
        >
          <ol className={cn("list-none flex flex-col w-full gap-y-2")}>
            {isOver && <div className={cn("border rounded-lg h-24")}></div>}
            <SortableContext items={items}>
              {listData.cards.map((card, index) => (
                <DndCard cardData={card} index={index} key={card.id} />
              ))}
            </SortableContext>
          </ol>
        </CardContent>
        <CardFooter className={cn("p-2 pb-0")}>
          <CreateCardForm
            listData={listData}
            className={cn("min-w-100 flex-grow")}
          />
        </CardFooter>
      </Card>
    </li>
  );
}
