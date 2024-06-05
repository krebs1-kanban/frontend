import { ProfileAvatar } from "@/entities/user";
import { ProjectMemberWithDetailsDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";

export function Member({
  member,
  isYou,
  className,
}: {
  member: ProjectMemberWithDetailsDto;
  isYou: boolean;
  className?: string;
}) {
  return (
    <ProfileAvatar
      profile={member.profile}
      className={cn(
        "w-8 h-8",
        "border-amber-300",
        isYou ? "border-2" : "border-none",
        className,
      )}
    />
  );
}
