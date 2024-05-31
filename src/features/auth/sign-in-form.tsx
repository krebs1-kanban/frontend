import { FormPageLayout } from "@/shared/ui/layouts/form-page-layout";
import { EmailPasswordSignInFooter } from "./_ui/email-password-sign-in-footer";
import { EmailPasswordSignInForm } from "./_ui/email-password-sign-in-form";

export function SignInForm() {
  return (
    <FormPageLayout
      title="Вход"
      form={<EmailPasswordSignInForm />}
      footer={<EmailPasswordSignInFooter />}
    />
  );
}
