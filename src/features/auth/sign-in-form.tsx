import { FormPageLayout } from "@/shared/ui/layouts/form-page-layout";
import { EmailPasswordSignInForm } from "./_ui/email-password-sign-in-form";

export function SignInForm() {
  return <FormPageLayout title="Вход" form={<EmailPasswordSignInForm />} />;
}
