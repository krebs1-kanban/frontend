import { publicConfig } from "@/shared/config/public-config";
import { ROUTES } from "@/shared/constants/routes";
import { writeToClipboard } from "@/shared/lib/clipboard-fns";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { cn } from "@/shared/ui/utils";
import { Link, Plus, Trash2 } from "lucide-react";
import { useCreateLink } from "../_vm/use-create-link";
import { useRemoveLink } from "../_vm/use-remove-link";

export function AddMember({
  projectId,
  projectLink,
  className,
}: {
  projectId: string;
  projectLink: string | null;
  className?: string;
}) {
  const { mutate: createMutate, isPending: isCreatePending } = useCreateLink();
  const { mutate: removeMutate, isPending: isRemovePending } = useRemoveLink();

  const handleClick = () => {
    if (projectLink) {
      writeToClipboard(
        `${publicConfig.FRONTEND_URL}${ROUTES.PROJECT_JOIN}/${projectLink}`,
      );
    } else {
      createMutate({ id: projectId });
    }
  };

  return (
    <Dialog>
      <DialogTrigger className={cn(className)} asChild>
        <Button className={cn("w-8 h-8 rounded-full p-2")}>
          <Plus className={cn("w-4 h-4")} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Поделиться проектом</DialogTitle>
        </DialogHeader>
        <div
          className={cn(
            "flex flex-row justify-between gap-3 w-full max-w-full",
          )}
        >
          <div className={cn("flex flex-row gap-1 w-full max-w-full")}>
            <span className={cn("w-9 h-9 p-[10px]")}>
              <Link className={cn("w-4 h-4")} />
            </span>
            <div className={cn("flex flex-col gap-1")}>
              <p className={cn("text-sm leading-4")}>Ссылка-приглашение</p>
              <Button
                className={cn("h-4 p-0 text-sm leading-4 justify-start")}
                onClick={handleClick}
                variant="link"
              >
                {projectLink ? <>Копировать</> : <>Создать</>}
              </Button>
            </div>
          </div>
          {projectLink && (
            <Button
              className={cn("w-9 h-9 p-[10px]")}
              onClick={() => removeMutate({ id: projectId })}
              variant="ghost"
            >
              <Trash2 className={cn("w-4 h-4")} />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
