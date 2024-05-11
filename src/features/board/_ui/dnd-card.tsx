import { CardDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";
import { Draggable } from "@hello-pangea/dnd";
import { BoardCard } from "../../../entities/card/board-card";

export function DndCard({
  cardData,
  index,
}: {
  cardData: CardDto;
  index?: number;
}) {
  return (
    <Draggable draggableId={cardData.id} index={cardData.index!}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="button"
          className={cn("list-none")}
        >
          <BoardCard cardData={cardData} />
        </li>
      )}
    </Draggable>
  );
}
