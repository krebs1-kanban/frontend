import { PasswordResetConfirmFormFooter } from "@/features/password-reset";
import { PasswordResetConfirmForm } from "@/features/password-reset/password-reset-confirm-form";
import { FormPageLayout } from "@/shared/ui/layouts/form-page-layout";

export const metadata = {
  title: "Подтверждение смены пароля",
};

export default function PasswordResetConfirmPage() {
  return (
    <FormPageLayout
      title={"Подтверждение изменения"}
      form={<PasswordResetConfirmForm />}
      footer={<PasswordResetConfirmFormFooter />}
    />
  );
}
