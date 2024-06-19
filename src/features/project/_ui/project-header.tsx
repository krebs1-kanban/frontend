import { ProjectMemberWithDetailsDto } from "@/shared/api/generated";
import { cn } from "@/shared/ui/utils";
import { AddMember } from "./add-member";
import { MembersList } from "./members-list";
import { ProjectTitle } from "./project-title";

export function ProjectHeader({
  projectId,
  projectName,
  projectLink,
  projectMembers,
  canRename = false,
  canAddMember = false,
  canControlMembers = false,
  className,
}: {
  projectId: string;
  projectName: string;
  projectLink: string | null;
  projectMembers: ProjectMemberWithDetailsDto[];
  canRename?: boolean;
  canAddMember?: boolean;
  canControlMembers?: boolean;
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
        <ProjectTitle
          projectId={projectId}
          projectName={projectName}
          canEdit={canRename}
        />
      </div>
      <div className={cn("flex flex-row gap-x-4")}>
        <MembersList
          members={projectMembers}
          canControl={canControlMembers}
          projectId={projectId}
        />
        {canAddMember && (
          <AddMember projectId={projectId} projectLink={projectLink} />
        )}
      </div>
    </div>
  );
}
