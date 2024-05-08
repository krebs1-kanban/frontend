import { useAttachTagMutation, useDetachTagMutation } from "@/entities/card";

export const useChangeSelectTag = () => {
  const attachTagMutation = useAttachTagMutation();
  const detachTagMutation = useDetachTagMutation();

	const isPending = detachTagMutation.isPending || attachTagMutation.isPending;
  const isError = detachTagMutation.isError || attachTagMutation.isError;
  const isSuccess = detachTagMutation.isSuccess || attachTagMutation.isSuccess;

  const execute = async ({
    cardId,
    tagId,
    current,
  }: {
    cardId: string;
    tagId: string;
    current: boolean;
  }) => {
		if(current) {
			detachTagMutation.mutate({id: cardId, tagId: tagId})
		}else{
			attachTagMutation.mutate({id: cardId, tagId: tagId})
		}
	};

	return {
    isPending,
    isError,
    isSuccess,
    execute,
  };
};
