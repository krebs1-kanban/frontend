import { CardDto } from '@/shared/api/generated'
import React from 'react'
import { useRenameCard } from '../_vm/use-rename-card'
import { cn } from '@/shared/ui/utils'
import { Input } from '@/shared/ui/input'

export function CardTitle({
  cardData,
  className,
}: {
  className?: string;
  cardData: CardDto;
}) {
  const [name, setName] = React.useState<string>(cardData.name ?? "");

  const { update } = useRenameCard();

  const handleBlur = () => {
    update({ id: cardData.id, name });
  };

  return (
    <div className={cn(className)}>
      <h2
        className={cn("w-0 h-0 overflow-hidden")}
      >
        {name}
      </h2>
      <Input
        className={cn("h-8 border-none truncate font-semibold text-xl p-0")}
        autoFocus={false}
        type="text"
        value={name}
        onChange={(e) => setName(() => e.target.value)}
        onBlur={handleBlur}
      />
    </div>
  );
}