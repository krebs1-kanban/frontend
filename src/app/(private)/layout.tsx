import AuthorizedGuard from "@/features/auth/authorized-guard";
import { AppHeader } from "@/widgets/app-header/app-header";

export default async function Layout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader variant="private" />
      <AuthorizedGuard>
        <>
          {children}
          {modal}
        </>
      </AuthorizedGuard>
    </>
  );
}
