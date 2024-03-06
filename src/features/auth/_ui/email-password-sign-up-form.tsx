"use client";

import { Alert, AlertTitle } from "@/shared/ui/alert";
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
import { useSignUpForm } from "../_vm/use-sign-up-form";

export function EmailPasswordSignUpForm() {
  const { form, errorMessage, mutate, isPending } = useSignUpForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => mutate(data))}
        autoComplete="off"
      >
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
                    autoComplete="off"
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
                <FormLabel className="sr-only">Пароль</FormLabel>
                <FormControl>
                  <Input
                    placeholder="пароль"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="off"
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
                <FormLabel className="sr-only">Повторение пароля</FormLabel>
                <FormControl>
                  <Input
                    placeholder="повторение пароля"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="off"
                    autoCorrect="off"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {errorMessage && (
            <Alert className={cn("mt-2")} variant="destructive">
              <AlertTitle>{errorMessage}</AlertTitle>
            </Alert>
          )}
          <Button className={cn("mt-2")} disabled={isPending}>
            {isPending && (
              <Spinner
                className="mr-2 h-4 w-4 "
                aria-label="Загрузка регистрации"
              />
            )}
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </Form>
  );
}
