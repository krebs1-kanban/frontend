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
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { SelectColor } from "@/shared/ui/select-color";
import { cn } from "@/shared/ui/utils";
import { useState } from "react";
import { useCreateAttachTag } from "../_vm/use-create-attach-tag";
import { useCreateTagForm } from "../_vm/use-create-tag-form";

export function CreateTagForm({
  className,
  cardId,
  boardId,
}: {
  className?: string;
  cardId: string;
  boardId: string;
}) {
  const { form } = useCreateTagForm();
  const { execute } = useCreateAttachTag();

  const [selectColorOpen, setSelectColorOpen] = useState<boolean>(false);

  return (
    <Form {...form}>
      <form
        className={cn(className)}
        onSubmit={form.handleSubmit((data) => {
          execute({
            createTagData: {
              boardId: boardId,
              name: data.name,
              color: data.color,
            },
            attachTagData: {
              cardId: cardId,
            },
          });
          form.reset();
        })}
      >
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
              <Popover open={selectColorOpen} onOpenChange={setSelectColorOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn("w-full")}
                      style={{
                        backgroundColor: field.value ?? "transparent",
                      }}
                    >
                      {field.value ? field.value : "Выбрать цвет"}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <SelectColor
                    color={field.value!}
                    onChange={(color) => {
                      form.setValue("color", color);
                      setSelectColorOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className={cn("mt-2 w-full")}>Создать</Button>
      </form>
    </Form>
  );
}
