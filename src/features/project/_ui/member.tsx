import { ProfileAvatar } from "@/entities/user";
import { ProjectMemberWithDetailsDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";

export function Member({
  member,
  className,
}: {
  member: ProjectMemberWithDetailsDto;
  className?: string;
}) {
  return <ProfileAvatar profile={member.profile} className={cn("w-8 h-8")} />;
}
