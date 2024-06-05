import { CardDtoStatus } from "@/shared/api/generated";
import { statusNames } from "@/shared/constants/card-statuses";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/shared/ui/select";

export function ChangeStatus({
  status,
  onStatusChange,
  className,
  disabled,
}: {
  status: CardDtoStatus;
  onStatusChange: (status: CardDtoStatus) => void;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <Select value={status} onValueChange={onStatusChange} disabled={disabled}>
      <SelectTrigger className={className}>{statusNames[status]}</SelectTrigger>
      <SelectContent>
        {Object.keys(statusNames).map((key) => (
          <SelectItem key={key} value={key}>
            {statusNames[key as CardDtoStatus]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
