import { CardDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";
import { Paperclip } from "lucide-react";
import { CardAttachment } from "./card-attachment";
import { UploadFile } from "./upload-file";

export function CardAttachments({
  className,
  cardData,
}: {
  className?: string;
  cardData: CardDto;
}) {
  return (
    <div className={cn(className)}>
      <div className={cn("mb-3 flex flex-row justify-between gap-x-3")}>
        <h3 className={cn("flex flex-row gap-x-2 items-center")}>
          <Paperclip className={cn("w-6 h-6")} />
          Файлы
        </h3>
        <UploadFile cardId={cardData.id} />
      </div>
      <div>
        <ul className={cn("flex flex-col gap-y-1")}>
          {cardData.files.map((file) => (
            <li key={file.name}>
              <CardAttachment data={{ ...file, cardId: cardData.id }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
