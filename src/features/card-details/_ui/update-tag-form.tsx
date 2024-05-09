import { useUpdateTagMutation } from "@/entities/tag";
import { TagDto } from "@/shared/api/generated";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/ui/utils";
import { Edit2, Save } from "lucide-react";
import React from "react";
import { useUpdateTagForm } from "../_vm/use-update-tag-form";

export function UpdateTagForm({ tag }: { tag: TagDto }) {
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const { mutate, isPending } = useUpdateTagMutation();
  const { form } = useUpdateTagForm({
    defaultValues: { name: tag.name, color: tag.color ?? "" },
  });

  const handleClick = () => {
    setIsEdit((val) => !val);
  };

  return (
    <div className={cn("flex flex-row gap-x-2 items-start max-w-[350px] w-full")}>
      <Form {...form}>
        <form
          className={cn("flex flex-row gap-x-2 items-start max-w-full w-full")}
          onSubmit={form.handleSubmit((data) => {
            mutate({ id: tag.id, name: data.name, color: data.color });
          })}
        >
          <div
            style={{
              backgroundColor: tag.color ?? "transparent",
              borderWidth: tag.color ? 0 : "1px",
              height: isEdit ? "" : "32px",
            }}
            className={cn(
              "p-2 inline-block min-w-12 max-w-full w-full relative rounded-lg",
            )}
          >
            {isEdit ? (
              <>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Название</FormLabel>
                      <FormControl>
                        <Input placeholder="Название" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Цветовой код</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Цветовой код"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            ) : (
              <h5
                className={cn("p-0 m-0 font-medium text-sm leading-4 truncate")}
                style={{
                  color: tag.color
                    ? "hsl(var(--primary-foreground))"
                    : "inherit",
                }}
              >
                {tag.name}
              </h5>
            )}
          </div>
          <Button
            className={cn("w-8 h-8 p-2")}
            variant="ghost"
            onClick={handleClick}
            disabled={isPending}
            type={!isEdit ? "submit" : "button"}
          >
            {isEdit ? (
              <Save className={cn("w-4 h-4")} />
            ) : (
              <Edit2 className={cn("w-4 h-4")} />
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
