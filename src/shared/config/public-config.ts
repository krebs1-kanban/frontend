import { z } from "zod";

const publicConfigSchema = z.object({
  BACKEND_URL: z.string(),
  FRONTEND_URL: z.string(),
});

export const publicConfig = publicConfigSchema.parse({
  ...process.env,
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
});
