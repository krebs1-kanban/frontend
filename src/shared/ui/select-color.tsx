import { COLORS } from "../constants/colors";
import { Button } from "./button";
import { cn } from "./utils";

export function SelectColor({
  color,
  onChange,
  className,
}: {
  color: string;
  onChange: (color: string) => void;
  className?: string;
}) {
  return (
    <div className={cn(className, "grid grid-cols-5 gap-1")}>
      {COLORS.map((c) => {
        return (
          <Button
            className={cn("h-8 min-w-full w-full", "border-none rounded-sm")}
            style={{ backgroundColor: c }}
            onClick={() => onChange(c)}
            key={c}
          ></Button>
        );
      })}
    </div>
  );
}
