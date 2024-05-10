import { ProjectMemberWithDetailsDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";
import { MembersList } from "./members-list";
import { ProjectTitle } from "./project-title";
import { AddMember } from './add-member'

export function ProjectHeader({
  projectId,
  projectName,
  projectLink,
  projectMembers,
  className,
}: {
  projectId: string;
  projectName: string;
  projectLink: string | null;
  projectMembers: ProjectMemberWithDetailsDto[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "p-3 border-b bg-card flex flex-row justify-between flex-wrap gap-4",
        className,
      )}
    >
      <div className={cn("flex flex-row gap-x-4 max-w-full")}>
        <ProjectTitle projectId={projectId} projectName={projectName} />
      </div>
      <div className={cn("flex flex-row gap-x-4")}>
        <MembersList members={projectMembers} />
				<AddMember projectId={projectId} projectLink={projectLink}/>
      </div>
    </div>
  );
}
