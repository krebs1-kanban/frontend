import { Profile } from "@/features/update-profile/profile";
import { cn } from "@/shared/ui/utils";

export const metadata = {
  title: "Твой профиль",
};

export default function MyProfilePage() {
  return (
    <main className={cn("container space-y-6 max-w-[600px] py-14")}>
      <Profile />
    </main>
  );
}
