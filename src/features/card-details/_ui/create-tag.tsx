import { CardDto, TagDto } from "@/shared/api/generated";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/ui/dialog";
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
      <DialogContent
        className={cn(
          "min-w-[320px] w-full max-w-96",
          "max-h-[512px]",
          "rounded-lg",
        )}
      >
        <div
          className={cn(
            "w-full max-w-full",
            "flex flex-col",
            "p-1",
            "overflow-y-auto scrollbar",
          )}
        >
          <CreateTagForm
            cardId={cardData.id}
            boardId={boardId}
            className={cn("w-full max-w-full", "mb-5")}
          />
          <SelectTagList tags={tagsForDraw} cardId={cardData.id} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
