import { ProfileDto } from '@/shared/api/generated'
import { getProfileDisplayName } from './get-profile-display-name'

export function getProfileLetters(profile: ProfileDto){
	const name = getProfileDisplayName(profile);

	const [a, b] = name.split("@")[0].split(/\.|\s|-|_/);

  if (!b) {
    return `${a[0]?.toUpperCase() ?? ""}${a[1]?.toLowerCase() ?? ""}`;
  }

  return `${a[0]?.toUpperCase() ?? ""}${b[0]?.toUpperCase() ?? ""}`;
}