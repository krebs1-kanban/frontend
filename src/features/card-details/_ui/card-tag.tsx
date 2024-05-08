import { TagDto } from "@/shared/api/generated";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/ui/utils";

export function CardTag({
  className,
  tagData,
  onClick,
}: {
  className?: string;
  tagData: TagDto;
  onClick: (tagId: string) => void;
}) {
  const handleClick = () => {
    onClick(tagData.id);
  };
  return (
    <Button
      onClick={handleClick}
      style={{
        backgroundColor: tagData.color ?? "transparent",
      }}
      variant={tagData.color ? "default" : "outline"}
      className={cn(
        "font-medium text-sm leading-4 truncate p-2 h-8 inline-block min-w-12 max-w-full relative",
      )}
    >
      {tagData.name}
    </Button>
  );
}
