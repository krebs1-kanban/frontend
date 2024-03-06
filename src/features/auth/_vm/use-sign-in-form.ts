import {
  authControllerSignIn,
  authControllerSignUp,
} from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export function useSignInForm() {
  const router = useRouter();

  const form = useForm<{
    email: string;
    password: string;
  }>();

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });

  const errorMessage = signInMutation.error
    ? "Ошибка во время авторизации"
    : undefined;

  return {
    form,
    errorMessage,
    mutate: signInMutation.mutate,
    isPending: signInMutation.isPending,
  };
}
