import { FormPageLayout } from "@/shared/ui/layouts/form-page-layout";
import { EmailPasswordSignUpFooter } from "./_ui/email-password-sign-up-footer";
import { EmailPasswordSignUpForm } from "./_ui/email-password-sign-up-form";

export function SignUpForm() {
  return (
    <FormPageLayout
      title="Регистрация"
      form={<EmailPasswordSignUpForm />}
      footer={<EmailPasswordSignUpFooter />}
    />
  );
}
