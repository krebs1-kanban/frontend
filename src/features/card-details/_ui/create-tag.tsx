import { CardDto, TagDto } from "@/shared/api/generated";
import { Button } from "@/shared/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { ScrollArea, ScrollBar } from "@/shared/ui/scroll-area";
import { cn } from "@/shared/ui/utils";
import { Plus } from "lucide-react";
import React from "react";
import { CreateTagForm } from "./create-tag-form";
import { SelectTagList } from "./select-tag-list";

const getTagsForDraw = (tags: TagDto[], cardTags: TagDto[]) => {
  return tags.map((tag) => {
    const selected = Boolean(cardTags.find((val) => val.id === tag.id));

    return {
      selected: selected,
      tag: tag,
    };
  });
};

export function CreateTag({
  className,
  cardData,
  tags,
  boardId,
}: {
  className?: string;
  cardData: CardDto;
  tags: TagDto[];
  boardId: string;
}) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const tagsForDraw = getTagsForDraw(tags, cardData.tags);

  return (
    <Popover open={isOpen} onOpenChange={(val) => setIsOpen(val)} modal>
      <PopoverTrigger asChild className={cn(className)}>
        <Button
          variant={"outline"}
          className={cn("font-medium text-sm leading-4 p-2 h-8 w-8")}
        >
          <Plus className={cn("w-4 h-4")} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("max-w-[254px]")}>
          <CreateTagForm
            cardId={cardData.id}
            boardId={boardId}
            className={cn("mb-4")}
          />
          <SelectTagList tags={tagsForDraw} cardId={cardData.id} />
      </PopoverContent>
    </Popover>
  );
}
