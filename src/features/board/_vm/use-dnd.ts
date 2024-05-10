import {
  boardKey,
  useMoveCardMutation,
  useMoveListMutation,
} from "@/entities/board";
import { BoardWithDetailsDto, CardDto, ListDto } from "@/shared/api/generated";
import {
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const useDnd = ({ boardId }: { boardId: string }) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
  );

  const [activeList, setActiveList] = useState<ListDto | null>(null);
  const [activeCard, setActiveCard] = useState<CardDto | null>(null);

  const { mutate: moveListMutate } = useMoveListMutation();
  const { mutate: moveCardMutate } = useMoveCardMutation();

  const queryClient = useQueryClient();

  const handleDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "list")
      setActiveList(event.active.data.current?.listData);
    if (event.active.data.current?.type === "card")
      setActiveCard(event.active.data.current?.cardData);
  };

  const handleDragOver = (event: DragOverEvent) => {
    
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveList(null);
    setActiveCard(null);

    const { active, over } = event;

    if (!over) return;

    const activeType = active.data.current?.type;
    const overType = over.data.current?.type;

    console.log(activeType, overType, 111, over.data.current);

    if (activeType === "list" && overType === "list") {
      if (active.id === over.id) return;

      moveListMutate({
        listId: active.id.toString(),
        boardId: active.data.current?.listData?.boardId.toString(),
        fromIndex: active.data.current?.index,
        toIndex: over.data.current?.index,
      });
    }

    if (activeType === "card" && overType === "card") {
      if (active.id === over.id) return;

      const activeListId = active.data.current?.cardData?.listId as string;
      const overListId = over.data.current?.cardData?.listId as string;

      if (activeListId === overListId) {
        moveCardMutate({
          cardId: active.id.toString(),
          fromListId: activeListId,
          fromIndex: active.data.current?.index,
          toListId: overListId,
          toIndex: over.data.current?.index,
        });
      } else {
        moveCardMutate({
          cardId: active.id.toString(),
          fromListId: activeListId,
          fromIndex: active.data.current?.index,
          toListId: overListId,
          toIndex: over.data.current?.index,
        });
      }
    }

    if (activeType === "card" && overType === "list") {
      const activeListId = active.data.current?.cardData?.listId as string;
      if (activeListId === over.id) return;

      moveCardMutate({
        cardId: active.id.toString(),
        fromListId: activeListId,
        fromIndex: active.data.current?.index,
        toListId: over.id.toString(),
        toIndex: 0,
      });
    }

    return;
  };

  return {
    sensors,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    activeList,
    activeCard,
  };
};
