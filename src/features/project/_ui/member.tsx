import { ProfileAvatar } from "@/entities/user";
import { getProfileDisplayName } from "@/entities/user/_vm/get-profile-display-name";
import { ProjectMemberWithDetailsDto } from "@/shared/api/generated";
import { PROJECT_ROLES_NAMES } from "@/shared/constants/project-roles";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/shared/ui/select";
import { cn } from "@/shared/ui/utils";
import { UserMinus } from "lucide-react";
import { useManageMember } from "../_vm/use-manage-mamber";

export function Member({
  member,
  isYou,
  className,
  canControl = false,
  projectId,
}: {
  member: ProjectMemberWithDetailsDto;
  isYou: boolean;
  className?: string;
  canControl?: boolean;
  projectId: string;
}) {
  const {
    handleRoleChange,
    handleRemove,
    isRoleChangePending,
    isRemovePending,
  } = useManageMember({
    userId: member.profile.userId,
    projectId: projectId,
  });

  if (!canControl || isYou)
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-0 m-0 rounded-full w-8 h-8">
          <ProfileAvatar
            profile={member.profile}
            className={cn(
              "w-8 h-8",
              "border-amber-300",
              isYou ? "border-2" : "border-none",
              className,
            )}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {getProfileDisplayName(member.profile)}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={cn("p-0")}>
          <Select
            defaultValue={member.role}
            onValueChange={handleRoleChange}
            disabled={isRoleChangePending || isRemovePending}
          >
            <SelectTrigger className={cn("w-full my-1.5 mx-2")}>
              {PROJECT_ROLES_NAMES[member.role]}
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.entries(PROJECT_ROLES_NAMES).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            variant="destructive"
            className={cn("w-full gap-2")}
            disabled={isRemovePending || isRoleChangePending}
            onClick={handleRemove}
          >
            <UserMinus className="w-4 h-4" />
            Удалить
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
