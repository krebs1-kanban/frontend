"use client";

import { ProfileAvatar } from "@/entities/user/_ui/profile-avatar";
import { useProfileQuery } from "@/entities/user/_vm/use-profile-query";
import { ROUTES } from "@/shared/constants/routes";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Skeleton } from "@/shared/ui/skeleton";
import { cn } from "@/shared/ui/utils";
import { LogOut, User } from "lucide-react";
import Link from "next/link";

export function Profile() {
  const profile = useProfileQuery();

  const isLoading = profile.isLoading && !profile.data;
  const isError = profile.isError;

  if (isLoading) {
    return <Skeleton className={cn("h-8 w-8 rounded-full")}></Skeleton>;
  }

  if (isError) {
    return <Link href={ROUTES.SIGN_IN}>Войти</Link>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="p-px rounded-full self-center h-8 w-8"
        >
          <ProfileAvatar profile={profile.data} className={cn("h-8 w-8")} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <p>Аккаунт</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="">
              <User />
              <span>Профиль</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut />
            <span>Выйти</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
