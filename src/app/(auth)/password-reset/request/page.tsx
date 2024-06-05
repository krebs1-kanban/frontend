import { PasswordResetRequestFormFooter } from "@/features/password-reset";
import { PasswordResetRequestForm } from "@/features/password-reset/password-reset-request-form";
import { FormPageLayout } from "@/shared/ui/layouts/form-page-layout";

export const metadata = {
  title: "Запрос на смену пароля",
};

export default function PasswordResetRequestPage() {
  return (
    <FormPageLayout
      title={"Запрос восстановления пароля"}
      form={<PasswordResetRequestForm />}
      footer={<PasswordResetRequestFormFooter />}
    />
  );
}
