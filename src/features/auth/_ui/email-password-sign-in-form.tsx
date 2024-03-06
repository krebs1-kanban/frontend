"use client";

import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { useSignInForm } from "../_vm/use-sign-in-form";
import { Spinner } from "@/shared/ui/spinner";

export function EmailPasswordSignInForm() {
  const { form, errorMessage, mutate, isPending } = useSignInForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => mutate(data))}>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Пароль</FormLabel>
                <FormControl>
                  <Input
                    placeholder="пароль"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect="off"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button disabled={isPending}>
            {isPending && (
              <Spinner className="mr-2 h-4 w-4 " aria-label="Загрузка входа" />
            )}
            Войти
          </Button>
        </div>
      </form>
    </Form>
  );
}
