import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useCreateTagForm = () => {
  const createTagFormSchema = z.object({
    name: z.string().min(1, { message: "Имя обязательное поле" }),
    color: z.string().optional(),
  });

  const form = useForm<z.infer<typeof createTagFormSchema>>({
    resolver: zodResolver(createTagFormSchema),
    defaultValues: {
      name: "",
      color: "",
    },
  });

  return { form };
};
