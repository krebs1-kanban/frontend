import { CardDto } from "@/shared/api/generated"
import { cn } from "@/shared/ui/utils"
import { HasAttachments } from './has-attachments'
import { HasDate } from "./has-date"
import { HasDescription } from "./has-description"

export function CardDescription({
  cardData,
  className,
}: {
  cardData: CardDto;
  className?: string;
}) {
  const hasDescription = Boolean(cardData.description);
  const hasDate = Boolean(cardData.dueDateTime);
  const hasAttachments = Boolean(cardData.files.length)

  console.log(hasAttachments, cardData.name, cardData.files, cardData)

  if (!(hasDescription || hasDate || hasAttachments)) return null;

  return (
    <div className={cn(className, "flex flex-row justify-between gap-x-2")}>
      <div className={cn("flex flex-row gap-x-2 flex-wrap max-w-full")}>
        {hasDescription && <HasDescription className={cn("")} />}
        {hasDate && (
          <HasDate
            className={cn("")}
            dueDateTime={cardData.dueDateTime}
          />
        )}
        {hasAttachments &&
          <HasAttachments attachmentsCount={cardData.files.length} />
        }
      </div>
      <div></div>
    </div>
  );
}
