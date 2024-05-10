import { useCreateProjectMutation } from '@/entities/projects'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const useCreateProjectForm = () => {
	const createProjectFormSchema = z.object({
    name: z.string().min(1, { message: "Имя обязательное поле" }),
  });

  const form = useForm<z.infer<typeof createProjectFormSchema>>({
    resolver: zodResolver(createProjectFormSchema),
    defaultValues: {
      name: "",
    },
  });

  return { form };
}