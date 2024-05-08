import React from "react";
import { Textarea, TextareaProps } from "./textarea";
import { cn } from "./utils";

export function AutoResizeTextarea({
  className,
  onInput,
  ...props
}: TextareaProps) {
  const ref = React.useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = `${e.target.scrollHeight}px`;
    }
  };

  return <Textarea className={cn(className, "scrollbar")} {...props} />;
}
