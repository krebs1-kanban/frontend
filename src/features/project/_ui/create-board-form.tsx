import { useCreateBoardMutation } from "@/entities/board";
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
import { useCreateBoardForm } from "../_vm/use-create-board-form";

export function CreateBoardForm({
  projectId,
  className,
}: {
  projectId: string;
  className?: string;
}) {
  const { mutate, isPending, isError, isSuccess } = useCreateBoardMutation();
  const { form } = useCreateBoardForm();

  return (
    <Form {...form}>
      <form
        className={cn(className)}
        onSubmit={form.handleSubmit((data) => {
          mutate({
            projectId: projectId,
            name: data.name,
          });
          form.reset();
        })}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className={cn("space-y-0")}>
              <FormLabel className="sr-only">Название</FormLabel>
              <FormControl>
                <Input
                  placeholder="Название"
                  type="text"
                  {...field}
                  className={cn("space-y-0")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className={cn("mt-2 w-full")} disabled={isPending}>
          Создать
        </Button>
      </form>
    </Form>
  );
}
