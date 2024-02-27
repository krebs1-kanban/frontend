"use client";

import { FullPageSpinner } from '@/shared/ui/full-page-spinner'
import { useEffect } from "react";

export default function AuthorizedGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoading = true
	const isAuth = false

  return (
    <>
      <FullPageSpinner isLoading={isLoading} />
      {isAuth && children}
    </>
  );
}