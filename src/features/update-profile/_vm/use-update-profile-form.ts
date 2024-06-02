import { useUpdateProfileMutation } from "@/entities/user/_vm/use-update-profile-mutation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

type ProfileDataType = {
  name: string | null;
};

const getDefaultValues = (profile: ProfileDataType) => ({
  name: profile.name ?? "",
});

const updateProfileSchema = z.object({
  name: z
    .string()
    .default("")
    .transform((val) => val.trim())
    .optional(),
});

export const useUpdateProfileForm = ({
  profileData,
  userId,
}: {
  profileData: ProfileDataType;
  userId: string;
}) => {
  const defaultValues = getDefaultValues(profileData);

  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: getDefaultValues(defaultValues),
  });

  const { mutate, isPending } = useUpdateProfileMutation();

  const handleSubmit = form.handleSubmit((data) => {
    mutate({ id: userId, name: data.name! });
  });

  return {
    form,
    isPending,
    handleSubmit,
  };
};
