import { ROUTES } from "@/shared/constants/routes";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { cn } from "@/shared/ui/utils";
import { RedirectType, redirect } from "next/navigation";

export default function IndexPage() {
  redirect(ROUTES.PROJECTS, RedirectType.replace);
  return (
    <main className={cn("container py-14")}>
      <FullPageSpinner isLoading={true} />
    </main>
  );
}
