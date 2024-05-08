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
import { useCreateAttachTag } from "../_vm/use-create-attach-tag";
import { useCreateTagForm } from "../_vm/use-create-tag-form";
import { Button } from '@/shared/ui/button'

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
              <FormControl>
                <Input placeholder="Цветовой код" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className={cn("mt-2 w-full")}>Создать</Button>
      </form>
    </Form>
  );
}
