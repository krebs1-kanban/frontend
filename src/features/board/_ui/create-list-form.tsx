"use client";

import { useCreateListMutation } from "@/entities/list";
import { BoardDto, BoardWithDetailsDto } from "@/shared/api/generated";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/form";
import { Spinner } from "@/shared/ui/spinner";
import { Textarea } from "@/shared/ui/textarea";
import { cn } from "@/shared/ui/utils";
import { Plus, X } from "lucide-react";
import React from "react";
import { useCreateListForm } from "../_vm/use-create-list-form";

export function CreateListForm({
  className,
  boardData,
}: {
  className?: string;
  boardData: BoardDto | BoardWithDetailsDto;
}) {
  const [isOpened, setIsOpened] = React.useState<boolean>(false);
  const { form } = useCreateListForm();
  const mutation = useCreateListMutation();

  const handleSubmit = (data: { name: string }) => {
    mutation.mutate({ name: data.name, boardId: boardData.id });
    form.reset();
    setIsOpened((prev) => !prev);
  };

  const handleClose = () => {
    form.reset();
    setIsOpened((prev) => false);
  };

  return (
    <div
      className={cn(
        className,
        "p-2 rounded-lg border shadow-sm bg-card",
      )}
    >
      {!isOpened && (
        <Button
          className={cn("min-w-full")}
          variant="ghost"
          onClick={() => setIsOpened((prev) => !prev)}
        >
          <Plus />
          Добавить список
        </Button>
      )}
      {isOpened && (
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        autoFocus
                        placeholder="Название списка"
                        className="resize-none w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className={cn("flex flex-row gap-x-2 mt-2")}>
                <Button
                  className={cn("flex-grow ")}
                  disabled={mutation.isPending}
                  variant="outline"
                  type="submit"
                >
                  {mutation.isPending && (
                    <Spinner
                      className="mr-2 h-4 w-4 "
                      aria-label="Создание списка"
                    />
                  )}
                  Сохранить
                </Button>
                <Button
                  className={cn("flex-grow-0 w-10 h-10 p-1")}
                  type="button"
                  onClick={handleClose}
                  variant="ghost"
                >
                  <X />
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
}
