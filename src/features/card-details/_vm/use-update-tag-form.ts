import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createTagFormSchema = z.object({
  name: z.string().min(1, { message: "Имя обязательное поле" }),
  color: z.string().optional(),
});

export type createTagFormSchemaType = z.infer<typeof createTagFormSchema>;

export const useUpdateTagForm = ({
  defaultValues,
}: {
  defaultValues: createTagFormSchemaType;
}) => {
  const form = useForm<createTagFormSchemaType>({
    resolver: zodResolver(createTagFormSchema),
    defaultValues: defaultValues,
  });

  return { form };
};
