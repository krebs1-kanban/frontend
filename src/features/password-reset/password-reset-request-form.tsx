"use client"

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
import { Spinner } from "@/shared/ui/spinner";
import { cn } from "@/shared/ui/utils";
import { useResetPasswordRequestForm } from "./_vm/use-reset-password-request-form";

export function PasswordResetRequestForm() {
  const { form, isPending, handleSubmit } = useResetPasswordRequestForm({});

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit}>
        <div className={cn("grid gap-2")}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="email@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoCorrect="off"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Новый пароль</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Новый пароль"
                    type="password"
                    autoCapitalize="none"
                    autoCorrect="off"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Повторение пароля</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Повторение пароля"
                    type="password"
                    autoCapitalize="none"
                    autoCorrect="off"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className={cn("mt-2")} disabled={isPending}>
            {isPending && (
              <Spinner className="mr-2 h-4 w-4 " aria-label="Сброс пароля" />
            )}
            Сбросить пароль
          </Button>
        </div>
      </form>
    </Form>
  );
}
