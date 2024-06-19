import { z } from "zod";

const publicConfigSchema = z.object({
  BACKEND_URL: z.string(),
  FRONTEND_URL: z.string(),

  STATIC_FILES_URL_SEGMENT: z.string(),
  PROJECT_ATTACHMENTS_URL_SEGMENT: z.string(),
});

export const publicConfig: z.infer<typeof publicConfigSchema> =
  publicConfigSchema.parse({
    ...process.env,
    BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,

    STATIC_FILES_URL_SEGMENT: process.env.NEXT_PUBLIC_STATIC_FILES_URL_SEGMENT,
    PROJECT_ATTACHMENTS_URL_SEGMENT:
      process.env.NEXT_PUBLIC_PROJECT_ATTACHMENTS_URL_SEGMENT,
  });
