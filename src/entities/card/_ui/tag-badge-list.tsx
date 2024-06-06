import { TagDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";
import { TagBadge } from "./tag-badge";

export function TagBadgeList({
  className,
  tags,
}: {
  className?: string;
  tags: TagDto[];
}) {
  const tagsForDraw = tags.filter((tag) => Boolean(tag.color));
  const isDrawTags = Boolean(tagsForDraw.length);

  if (!isDrawTags) return null;

  return (
    <div className={cn("flex flex-row flex-wrap gap-1", className)}>
      {tagsForDraw.map((tag) => (
        <TagBadge tagData={tag} key={tag.id} className="min-w-[20%] h-2 p-0" />
      ))}
    </div>
  );
}
