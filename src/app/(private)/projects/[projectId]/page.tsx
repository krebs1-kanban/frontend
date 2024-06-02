import { Project } from "@/features/project/project";
import { cn } from "@/shared/ui/utils";

export const metadata = {
  title: "Проект",
};

export default function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  return (
    <main className={cn("w-full")}>
      <Project projectId={params.projectId} />
    </main>
  );
}
