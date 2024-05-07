"use client";

import { useCreateCardMutation } from "@/entities/card";
import { ListDto } from "@/shared/api/generated";
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
import { useCreateCardForm } from "../_vm/use-create-card-form";

export function CreateCardForm({
  className,
  listData,
}: {
  className?: string;
  listData: ListDto;
}) {
  const [isOpened, setIsOpened] = React.useState<boolean>(false);
  const { form } = useCreateCardForm();
  const mutation = useCreateCardMutation();

  const handleSubmit = (data: { name: string }) => {
    mutation.mutate({ name: data.name, listId: listData.id });
    form.reset();
    setIsOpened((prev) => !prev);
  };

  const handleClose = () => {
    form.reset();
    setIsOpened((prev) => false);
  };

  return (
    <div className={cn(className)}>
      {!isOpened && (
        <Button
          className={cn("min-w-full")}
          variant="ghost"
          onClick={() => setIsOpened((prev) => !prev)}
        >
          <Plus />
          Добавить карточку
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
                        placeholder="Название карточки"
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
                      aria-label="Создание карточки"
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
