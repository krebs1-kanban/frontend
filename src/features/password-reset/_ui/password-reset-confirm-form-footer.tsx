import { ROUTES } from '@/shared/constants/routes'
import { cn } from '@/shared/ui/utils'
import Link from 'next/link'

export function PasswordResetConfirmFormFooter() {
  return (
    <div className={cn("flex flex-col gap-y-1")}>
      <Link
        href={ROUTES.PASSWORD_RESET_REQUEST}
        className={cn(
          "text-sm text-foreground/80",
          "hover:text-foreground/100 hover:no-underline",
        )}
      >
        Назад
      </Link>
    </div>
  );
}
