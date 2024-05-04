import { UpdateProfileForm } from "@/features/update-profile/update-profile-form";
import { Separator } from "@/shared/ui/separator";
import { cn } from "@/shared/ui/utils";

export default function MyProfilePage() {
  return (
    <main className={cn("container space-y-6 max-w-[600px] py-14")}>
      <div>
        <h3 className={cn("text-center text-lg font-medium")}>
          Это ваш профиль
        </h3>
        <p className={cn("text-center text-sm text-muted-foreground")}>
          Здесь вы можете изменить данные о себе
        </p>
      </div>
      <Separator />
      <UpdateProfileForm />
    </main>
  );
}
