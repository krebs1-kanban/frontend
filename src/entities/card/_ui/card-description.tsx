import { CardDto } from "@/shared/api/generated"
import { Toggle } from "@/shared/ui/toggle"
import { cn } from "@/shared/ui/utils"
import { Archive } from "lucide-react"
import { useToggleCardArchive } from "../_vm/use-toggle-card-archieve"
import { HasAttachments } from "./has-attachments"
import { HasDate } from "./has-date"
import { HasDescription } from "./has-description"
import { HasExecutors } from "./has-executors"

export function CardDescription({
  cardData,
  className,
  canArchive = false,
}: {
  cardData: CardDto;
  className?: string;
  canArchive?: boolean;
}) {
  const hasDescription = Boolean(cardData.description);
  const hasDate = Boolean(cardData.dueDateTime);
  const hasAttachments = Boolean(cardData.files.length);
  const hasExecutors = Boolean(cardData.user_ids.length);

  const { isToggleCardPending, toggle } = useToggleCardArchive(cardData.id);

  //if (!(hasDescription || hasDate || hasAttachments)) return null;

  console.log(canArchive)

  return (
    <div
      className={cn(
        className,
        "flex flex-row justify-between items-center gap-x-2",
      )}
    >
      <div className={cn("flex flex-row gap-x-2 flex-wrap max-w-full")}>
        {hasDescription && <HasDescription className={cn("")} />}
        {hasDate && <HasDate dueDateTime={cardData.dueDateTime} />}
        {hasAttachments && (
          <HasAttachments attachmentsCount={cardData.files.length} />
        )}
        {hasExecutors && (
          <HasExecutors executorsNumber={cardData.user_ids.length} />
        )}
      </div>
      <div className={cn("flex flex-row items-center")}>
        <Toggle
          className={cn(
            "w-8 h-8 p-2 self-center flex-shrink-0 flex-grow-0 space-y-0",
          )}
          style={{ marginTop: "0" }}
          pressed={cardData.isArchived}
          disabled={isToggleCardPending || !canArchive}
          onPressedChange={toggle}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Archive className={cn("w-4 h-4")} />
        </Toggle>
      </div>
    </div>
  );
}
