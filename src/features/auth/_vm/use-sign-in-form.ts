import { ErrorType } from "@/shared/api/api-instance";
import { SignInDto, authControllerSignIn } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useSignInForm() {
  const router = useRouter();

  const signInFormSchema = z.object({
    email: z.string().email({ message: "Не E-mail" }),
    password: z.string().min(1, {message: "Пароль обязательное поле"}),
  });

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signInMutation = useMutation<
    void,
    ErrorType<Error>,
    SignInDto,
    unknown
  >({
    mutationFn: authControllerSignIn,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });

  const errorMessage = signInMutation.error
    ? "Неверный логин или пароль"
    : undefined;

  return {
    form,
    errorMessage,
    mutate: signInMutation.mutate,
    isPending: signInMutation.isPending,
  };
}
