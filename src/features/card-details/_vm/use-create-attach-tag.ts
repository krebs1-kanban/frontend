import { useAttachTagMutation } from "@/entities/card";
import { useCreateTagMutation } from "@/entities/tag";
import { CreateTagDto } from "@/shared/api/generated";

export const useCreateAttachTag = () => {
  const createTagMutation = useCreateTagMutation();
  const attachTagMutation = useAttachTagMutation();

  const isPending = createTagMutation.isPending || attachTagMutation.isPending;
  const isError = createTagMutation.isError || attachTagMutation.isError;
  const isSuccess = createTagMutation.isSuccess || attachTagMutation.isSuccess;

  const execute = async ({
    createTagData,
    attachTagData,
  }: {
    createTagData: CreateTagDto;
    attachTagData: { cardId: string };
  }) => {
    const tag = await createTagMutation
      .mutateAsync(createTagData)
      .catch((e) => null);

    if (tag) {
      await attachTagMutation.mutateAsync({
        id: attachTagData.cardId,
        tagId: tag.id,
      });
    }
  };

  return {
    isPending,
    isError,
    isSuccess,
    execute,
  };
};
