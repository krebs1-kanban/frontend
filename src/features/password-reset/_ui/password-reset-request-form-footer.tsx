import { ROUTES } from '@/shared/constants/routes'
import { cn } from '@/shared/ui/utils'
import Link from 'next/link'

export function PasswordResetRequestFormFooter() {
  return (
    <div className={cn("flex flex-col gap-y-1")}>
      <Link
        href={ROUTES.SIGN_IN}
        className={cn(
          "text-sm text-foreground/80",
          "hover:text-foreground/100 hover:no-underline",
        )}
      >
        Отменить
      </Link>
    </div>
  );
}
