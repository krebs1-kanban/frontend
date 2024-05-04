import { ProfileDto } from '@/shared/api/generated'

export function getProfileDisplayName(profile: ProfileDto){
	return profile.name ? profile.name : profile.email;
}