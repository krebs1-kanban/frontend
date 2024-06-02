"use client"

import { useProfileQuery } from "@/entities/user/_vm/use-profile-query";
import { Spinner } from "@/shared/ui/spinner";
import { ProfileForm } from "./_ui/profile-form";
import { FullPageSpinner } from '@/shared/ui/full-page-spinner'

export function UpdateProfileForm() {
  const profileQuery = useProfileQuery();

  if (profileQuery.isPending) {
    return <FullPageSpinner isLoading={true} aria-label="Загрузка профиля" />;
  }

	if (!profileQuery.data) {
		return <div>Не удалось загрузить профиль</div>
	}

  return <ProfileForm profile={profileQuery.data} />;
}
