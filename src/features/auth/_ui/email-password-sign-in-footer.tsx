import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/ui/utils";
import Link from "next/link";

export function EmailPasswordSignInFooter() {
  return (
    <div className={cn("flex flex-col gap-y-1")}>
      <Link
        href={ROUTES.SIGN_UP}
        className={cn(
          "text-sm text-foreground/80",
          "hover:text-foreground/100 hover:no-underline",
        )}
      >
        Создать аккаунт
      </Link>
    </div>
  );
}
