import { Projects } from '@/features/projects/projects'
import { cn } from '@/shared/ui/utils'

export const metadata = {
  title: "Твои проекты",
};

export default function ProjectsPage() {
  return (
    <main className={cn("container w-full mx-auto px-4")}>
      <Projects/>
    </main>
  );
}
