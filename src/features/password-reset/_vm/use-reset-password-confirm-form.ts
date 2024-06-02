import { ErrorType } from "@/shared/api/api-instance";
import {
  PasswordResetConfirmDto,
  authControllerPasswordResetConfirm,
} from "@/shared/api/generated";
import {
  BadRequestErrorType,
  ERROR_TYPES,
} from "@/shared/constants/api-error-types";
import { ROUTES } from "@/shared/constants/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useResetPasswordConfirmForm = () => {
  const router = useRouter();

  const resetConfirmFormSchema = z.object({
    code: z.string({ required_error: "Обязательное поле" }),
  });

  const form = useForm<z.infer<typeof resetConfirmFormSchema>>({
    resolver: zodResolver(resetConfirmFormSchema),
    defaultValues: {
      code: "",
    },
  });

  const { isPending, isError, mutateAsync } = useMutation<
    void,
    ErrorType<BadRequestErrorType>,
    PasswordResetConfirmDto
  >({
    mutationFn: authControllerPasswordResetConfirm,
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await mutateAsync(data);
    } catch (error) {
      if (
        (error as ErrorType<BadRequestErrorType>).response?.data.type ===
        ERROR_TYPES.wrongResetCode
      ) {
        form.setError(
          "code",
          { type: "manual", message: "Неправильный код подтверждения" },
          { shouldFocus: true },
        );
        form.resetField("code", { keepError: true });
        return;
      }
    }

    router.replace(ROUTES.SIGN_IN);
  });

  return {
    form,
    isPending,
    handleSubmit,
  };
};
