import { authControllerPasswordResetReq } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useResetPasswordRequestForm = ({
  emailDefault = "",
}: {
  emailDefault?: string;
}) => {
  const router = useRouter();

  const resetRequestFormSchema = z
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

  const form = useForm<z.infer<typeof resetRequestFormSchema>>({
    resolver: zodResolver(resetRequestFormSchema),
    defaultValues: {
      email: emailDefault,
      password: "",
      passwordConfirm: "",
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: authControllerPasswordResetReq,
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    await mutateAsync(data);
    router.replace(ROUTES.PASSWORD_RESET_CONFIRM);
  });

  return {
    form,
    isPending,
    handleSubmit,
  };
};
