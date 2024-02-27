"use client";

import { ThemeProvider } from "@/features/theme/theme-provider";
import React from "react";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
