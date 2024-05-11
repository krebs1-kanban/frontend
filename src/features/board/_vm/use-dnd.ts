import { useMoveCardMutation, useMoveListMutation } from "@/entities/board";
import { DropResult } from "@hello-pangea/dnd";

const droppableTypes = {
  CARD: "card",
  LIST: "list",
};

const dropReason = {
  DROP: "",
};

export const useDnd = ({ boardId }: { boardId: string }) => {
  const { mutate: moveListMutate } = useMoveListMutation();
  const { mutate: moveCardMutate } = useMoveCardMutation();

  const handleDragEnd = (data: DropResult) => {
    console.log(data);

    if (!data.destination) return;

    if (!data.source) return;

    if (data.type === droppableTypes.LIST) {
      moveListMutate({
        boardId: boardId,
        listId: data.draggableId,
        fromIndex: data.source.index,
        toIndex: data.destination.index,
      });

      return;
    }

    if (data.type === droppableTypes.CARD) {
      moveCardMutate({
        cardId: data.draggableId,
        fromListId: data.source.droppableId,
        fromIndex: data.source.index,
        toListId: data.destination.droppableId,
        toIndex: data.destination.index,
      });

      return;
    }

    return;
  };

  return {
    handleDragEnd,
  };
};
