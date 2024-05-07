import { ListDto } from "@/shared/api/generated";
import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/ui/utils";
import React from "react";
import { useRenameList } from "../_vm/use-rename-list";

export function ListTitle({
  listData,
  className,
}: {
  className: string;
  listData: ListDto;
}) {
  const [name, setName] = React.useState<string>(listData.name ?? "");

  const { update } = useRenameList();

  const handleBlur = () => {
    update({ id: listData.id, name });
  };

  return (
    <div className={cn(className)}>
      <h2
        className={cn("w-0 h-0 overflow-hidden")}
      >
        {name}
      </h2>
      <Input
        className={cn("h-8 border-none truncate")}
        type="text"
        value={name}
        onChange={(e) => setName(() => e.target.value)}
        onBlur={handleBlur}
      />
    </div>
  );
}
