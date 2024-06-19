import { useSetExecutorMutation } from "@/entities/card/_vm/use-set-executor";
import { getProfileDisplayName } from "@/entities/user/_vm/get-profile-display-name";
import { CardDto, ProjectMemberWithDetailsDto } from "@/shared/api/generated";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { cn } from "@/shared/ui/utils";

export function SelectExecutor({
  members,
  executors,
  cardId,
}: {
  members: ProjectMemberWithDetailsDto[];
  executors: CardDto["user_ids"];
  cardId: string;
}) {
  const { mutateAsync, isPending } = useSetExecutorMutation();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Исполнители</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className={cn("flex flex-col gap-y-2")}>
          {members.map((member) => (
            <div
              key={member.profile.userId}
              className={cn("flex flex-row gap-x-2 items-center")}
            >
              <Checkbox
                defaultChecked={executors.includes(member.profile.userId)}
                onCheckedChange={async (checked) => {
                  await mutateAsync({
                    cardId: cardId,
                    userId: member.profile.userId,
                    execute: !!checked,
                  });
                }}
                disabled={isPending}
              />
              <p>{getProfileDisplayName(member.profile)}</p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
