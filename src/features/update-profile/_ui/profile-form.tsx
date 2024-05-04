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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const updateProfileSchema = z.object({
  email: z.string().email().optional(),
  name: z
    .string()
    .transform((val) => val.trim())
    .optional(),
});

const getDefaultValues = (profile: ProfileDto) => ({
  email: profile.email,
  name: profile.name ?? "",
});

export function ProfileForm({ profile }: { profile: ProfileDto }) {
  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: getDefaultValues(profile),
  });

	const isPending = false

  return (
    <Form {...form}>
      <form>
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
              <FormMessage />
            </FormItem>
          )}
        />
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
        <Button className={cn("mt-2")} disabled={isPending}>
          {isPending && (
            <Spinner
              className="mr-2 h-4 w-4 "
              aria-label="Обновление профиля"
            />
          )}
          Сохранить
        </Button>
      </form>
    </Form>
  );
}
