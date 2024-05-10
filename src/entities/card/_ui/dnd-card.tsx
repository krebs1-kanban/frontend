import { CardDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { BoardCard } from "../board-card";

export function DndCard({
  cardData,
  index,
}: {
  cardData: CardDto;
  index?: number;
}) {
  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: cardData.id,
    data: {
      type: "card",
      cardData,
      index,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <li
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={cn(isDragging && "opacity-50", "list-none")}
      style={style}
    >
      <BoardCard cardData={cardData} />
    </li>
  );
}
