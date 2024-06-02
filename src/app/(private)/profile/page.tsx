import { Profile } from '@/features/update-profile/profile'
import { Separator } from "@/shared/ui/separator";
import { cn } from "@/shared/ui/utils";

export default function MyProfilePage() {
  return (
    <main className={cn("container space-y-6 max-w-[600px] py-14")}>
      <Profile/>
    </main>
  );
}
