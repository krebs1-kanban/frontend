"use client";

import { useProfileQuery } from "@/entities/user/_vm/use-profile-query";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { Separator } from "@/shared/ui/separator";
import { cn } from "@/shared/ui/utils";
import { ProfileForm } from "./_ui/profile-form";

export function Profile() {
  const profileQuery = useProfileQuery();

  if (profileQuery.isPending) {
    return <FullPageSpinner isLoading={true} aria-label="Загрузка профиля" />;
  }

  if (!profileQuery.data) {
    return <div>Не удалось загрузить профиль</div>;
  }

  return (
    <div className={cn("flex flex-col")}>
      <div className={cn("mb-3")}>
        <h3 className={cn("text-center text-lg font-medium")}>
          Это ваш профиль
        </h3>
        <p className={cn("text-center text-sm text-muted-foreground")}>
          Здесь вы можете изменить данные о себе
        </p>
      </div>
      <Separator />
      <ProfileForm profile={profileQuery.data} className={cn("mt-3")} />
    </div>
  );
}
