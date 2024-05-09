import { CardDto, TagDto } from "@/shared/api/generated";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/shared/ui/dialog";
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

  const tagsForDraw = React.useMemo(
    () => getTagsForDraw(tags, cardData.tags),
    [tags, cardData.tags],
  );

  return (
    <Dialog open={isOpen} onOpenChange={(val) => setIsOpen(val)}>
      <DialogTrigger asChild className={cn(className)}>
        <Button
          variant={"outline"}
          className={cn("font-medium text-sm leading-4 p-2 h-8 w-8")}
        >
          <Plus className={cn("w-4 h-4")} />
        </Button>
      </DialogTrigger>
      <DialogContent className={cn("max-h-[400px] rounded-lg")}>
        <DialogHeader />
        <ScrollArea className={cn("max-h-[350px] max-w-full")}>
          <div className={cn("max-w-[462px] p-4 mb-5")}>
            <CreateTagForm
              cardId={cardData.id}
              boardId={boardId}
              className={cn("mb-5")}
            />
            <SelectTagList tags={tagsForDraw} cardId={cardData.id} />
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
        <DialogFooter />
      </DialogContent>
    </Dialog>
  );
}
