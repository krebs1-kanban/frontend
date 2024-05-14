"use client";

import { useSessionQuery } from "@/entities/session/_vm/use-session-query";
import { ROUTES } from "@/shared/constants/routes";
import { SEARCH_PARAMS_KEYS } from "@/shared/constants/search-params-keys";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { redirect, usePathname, useSearchParams } from "next/navigation";

export default function AuthorizedGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSessionQuery();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (session.isError) {
    const params = !searchParams.toString()
      ? ""
      : `${searchParams.toString()}&`;
    const callbackUrl = `${params}${SEARCH_PARAMS_KEYS.CALLBACK}=${pathname}`;
    redirect(`${ROUTES.SIGN_IN}?${callbackUrl}`);
  }

  return (
    <>
      <FullPageSpinner isLoading={session.isPending} />
      {session.isSuccess && children}
    </>
  );
}
