import { authControllerSignUp } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useSignUpForm() {
  const router = useRouter();

  const signUpFormSchema = z
    .object({
      email: z.string().email({ message: "Не E-mail" }),
      password: z.string().min(8, { message: "Минимальная длина 8 символов" }),
      passwordConfirm: z
        .string()
        .min(8, { message: "Минимальная длина 8 символов" }),
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: "Пароли не совпадают",
      path: ["passwordConfirm"],
    });

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
    onError(error, variables, context) {
      console.log(error, variables, context);
    },
  });

  const errorMessage = signUpMutation.error
    ? "Пользователь с таким E-mail уже существует"
    : undefined;

  return {
    form,
    errorMessage,
    mutate: signUpMutation.mutate,
    isPending: signUpMutation.isPending,
  };
}
