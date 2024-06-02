"use client"

import { useJoinToProject } from "@/entities/projects/_vm/queries";
import { ROUTES } from "@/shared/constants/routes";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function JoinProjectPage({
  params,
}: {
  params: { code: string };
}) {
  const { mutateAsync, isError } = useJoinToProject();
  const router = useRouter();

  useEffect(() => {
    mutateAsync({ link: params.code }).then((data) => {
      router.replace(`${ROUTES.PROJECTS}/${data.projectId}`);
    });
  }, []);

	if(isError) return <h1>Не удалось подключиться к проекту</h1>

  return <FullPageSpinner isLoading={true} />;
}
