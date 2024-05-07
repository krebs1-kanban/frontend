import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useCreateCardForm() {
  const createCardFormSchema = z.object({
    name: z.string().min(1, { message: "Введите название!" }),
  });

  const form = useForm<z.infer<typeof createCardFormSchema>>({
    resolver: zodResolver(createCardFormSchema),
    defaultValues: {
      name: "",
    },
  });

  return { form };
}
