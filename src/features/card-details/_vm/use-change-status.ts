import { useUpdateCardMutation } from "@/entities/card";
import { CardDtoStatus } from "@/shared/api/generated";

export const useChangeStatus = () => {
  const { mutateAsync, isPending } = useUpdateCardMutation();
  const changeStatus = async (data: { id: string; status: CardDtoStatus }) => {
    await mutateAsync(data);
  };

  return {
    changeStatus,
    isPending,
  };
};
