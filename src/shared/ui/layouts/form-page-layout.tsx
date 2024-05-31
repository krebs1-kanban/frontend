import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import React from "react";
import { cn } from "../utils";

export function FormPageLayout({
  title,
  form,
  footer = null,
}: {
  title: string;
  form: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="container relative  flex-col items-center justify-center self-center pt-24">
      <Card className="max-w-[350px] mx-auto">
        <CardHeader className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        </CardHeader>
        <CardContent className="grid gap-4">{form}</CardContent>
        {footer && (
          <CardFooter className={cn("space-y-2")}>{footer}</CardFooter>
        )}
      </Card>
    </div>
  );
}
