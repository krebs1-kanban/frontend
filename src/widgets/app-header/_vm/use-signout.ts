import { useResetSession } from "@/entities/session/_vm/use-reset-session";
import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useSignOut = () => {
  const resetSession = useResetSession();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: authControllerSignOut,
    async onSuccess() {
      router.push(ROUTES.SIGN_IN);
      resetSession();
    },
  });

  return {
    isPending,
    signOut: mutate,
  };
};
