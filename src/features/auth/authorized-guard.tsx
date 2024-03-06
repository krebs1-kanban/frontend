"use client";

import { useSessionQuery } from "@/entities/session/_vm/use-session-query";
import { ROUTES } from "@/shared/constants/routes";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { useRouter } from "next/navigation";

export default function AuthorizedGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const session = useSessionQuery();

  const isError = session.isError;
  const isLoading = session.isLoading && !session.data;
  const isAuth = session.data;

  if (isError) router.replace(ROUTES.SIGN_IN);

  return (
    <>
      <FullPageSpinner isLoading={isLoading} />
      {isAuth && children}
    </>
  );
}
