import { ProjectMemberWithDetailsDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";
import { Member } from "./member";

export function MembersList({
  members,
  className,
}: {
  members: ProjectMemberWithDetailsDto[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-row flex-wrap gap-2")}>
      {members.map((member) => (
        <Member member={member} key={member.profile.userId} />
      ))}
    </div>
  );
}
