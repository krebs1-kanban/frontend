import { CardDto } from "@/shared/api/generated";
import { AutoResizeTextarea } from "@/shared/ui/auto-resize-textarea";
import { cn } from "@/shared/ui/utils";
import { Text } from "lucide-react";
import React from "react";
import { useUpdateCardDescription } from "../_vm/use-update-card-description";

export function CardDescription({
  className,
  cardData,
}: {
  className?: string;
  cardData: CardDto;
}) {
  const [description, setDescription] = React.useState<string>(
    cardData.description ?? "",
  );

  const { update } = useUpdateCardDescription();

  const handleBlur = () => {
    update({ id: cardData.id, description });
  };

  return (
    <div className={cn(className)}>
      <h3 className={cn("mb-3 flex flex-row gap-x-2 items-center")}>
        <Text className={cn("w-6 h-6")} />
        Описание
      </h3>
      <AutoResizeTextarea
        value={description}
        className={cn("resize-none text-sm")}
        onChange={(e) => setDescription(() => e.target.value)}
				onBlur={handleBlur}
      />
    </div>
  );
}
