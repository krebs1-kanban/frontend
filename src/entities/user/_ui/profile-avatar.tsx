import { ProfileDto } from "@/shared/api/generated";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { getProfileLetters } from "../_vm/get-profile-letters";
import { cn } from '@/shared/ui/utils'

export const ProfileAvatar = ({
  profile,
  className,
}: {
  profile?: ProfileDto;
  className?: string;
}) => {
  if (!profile) return null;

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src="" />
      <AvatarFallback>{getProfileLetters(profile)}</AvatarFallback>
    </Avatar>
  );
};
