import { useProfileQuery } from "@/entities/user/_vm/use-profile-query";
import { ProjectMemberWithDetailsDto } from "@/shared/api/generated";
import { Spinner } from "@/shared/ui/spinner";
import { cn } from "@/shared/ui/utils";
import { Member } from "./member";

export function MembersList({
  members,
  className,
  canControl = false,
  projectId,
}: {
  members: ProjectMemberWithDetailsDto[];
  className?: string;
  canControl?: boolean;
  projectId: string;
}) {
  const profileQuery = useProfileQuery();

  if (profileQuery.isPending) {
    return <Spinner className={cn("w-6 h-6", className)} />;
  }

  if (!profileQuery.data) {
    return <div>Не удалось загрузить участников</div>;
  }

  return (
    <div className={cn("flex items-center flex-row flex-wrap gap-2")}>
      {members.map((member) => (
        <Member
          projectId={projectId}
          member={member}
          key={member.profile.userId}
          isYou={member.profile.userId === profileQuery.data.userId}
          canControl={canControl}
        />
      ))}
    </div>
  );
}
