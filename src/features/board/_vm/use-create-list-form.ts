import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useCreateListForm() {
  const createListFormSchema = z.object({
    name: z.string().min(1, { message: "Введите название!" }),
  });

  const form = useForm<z.infer<typeof createListFormSchema>>({
    resolver: zodResolver(createListFormSchema),
    defaultValues: {
      name: "",
    },
  });

  return { form };
}
