"use client";

import { useSessionQuery } from "@/entities/session/_vm/use-session-query";
import { ROUTES } from "@/shared/constants/routes";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { redirect, usePathname } from "next/navigation";

export default function AuthorizedGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSessionQuery();

  const pathname = usePathname();

  if (session.isError) {
    redirect(`${ROUTES.SIGN_IN}`);
  }

  return (
    <>
      <FullPageSpinner isLoading={session.isPending} />
      {session.isSuccess && children}
    </>
  );
}
