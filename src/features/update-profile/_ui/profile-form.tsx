"use client";

import { ProfileDto } from "@/shared/api/generated";
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
import { useUpdateProfileForm } from "../_vm/use-update-profile-form";

export function ProfileForm({
  profile,
  className,
}: {
  profile: ProfileDto;
  className?: string;
}) {
  const { form, isPending, handleSubmit } = useUpdateProfileForm({
    userId: profile.userId,
    profileData: { name: profile.name },
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className={cn(className)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Имя</FormLabel>
              <FormControl>
                <Input
                  placeholder="Имя"
                  type="text"
                  autoCapitalize="none"
                  autoComplete="name"
                  autoCorrect="off"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.formState.isDirty && (
          <Button className={cn("mt-2")} disabled={isPending}>
            {isPending && (
              <Spinner
                className="mr-2 h-4 w-4 "
                aria-label="Обновление профиля"
              />
            )}
            Сохранить
          </Button>
        )}
      </form>
    </Form>
  );
}
