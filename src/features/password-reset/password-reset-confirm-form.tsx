"use client"

import { useResetPasswordConfirmForm } from './_vm/use-reset-password-confirm-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { cn } from '@/shared/ui/utils'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { Spinner } from '@/shared/ui/spinner'

export function PasswordResetConfirmForm() {
  const { form, isPending, handleSubmit } = useResetPasswordConfirmForm();

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit}>
        <div className={cn("grid gap-2")}>
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Код из Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Код из Email"
                    type="text"
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
              <Spinner className="mr-2 h-4 w-4 " aria-label="Изменение пароля" />
            )}
            Подтвердить
          </Button>
        </div>
      </form>
    </Form>
  );
}