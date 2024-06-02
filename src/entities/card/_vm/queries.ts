import { boardKey } from "@/entities/board";
import {
  AddRemoveTagDto,
  CardDto,
  DetachFileDto,
  UpdateCardDto,
  cardControllerAddTag,
  cardControllerAttachFile,
  cardControllerCreate,
  cardControllerDetachFile,
  cardControllerGetById,
  cardControllerRemoveTag,
  cardControllerUpdate,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const cardKey = ["card"];

export const useGetCardByIdQuery = (id: string) => {
  return useQuery({
    queryKey: [...cardKey, { id }],
    queryFn: () => cardControllerGetById(id),
  });
};

export const useCreateCardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: cardControllerCreate,
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: boardKey });
    },
  });
};

export const useUpdateCardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...other }: UpdateCardDto & { id: string }) =>
      cardControllerUpdate(id, other),
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: boardKey });
      await queryClient.invalidateQueries({
        queryKey: [...cardKey, { id: vars.id }],
      });
    },
  });
};

export const useAttachTagMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...other }: AddRemoveTagDto & { id: string }) =>
      cardControllerAddTag(id, other),
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: boardKey });
      await queryClient.invalidateQueries({
        queryKey: [...cardKey, { id: vars.id }],
      });
    },
  });
};

export const useDetachTagMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...other }: AddRemoveTagDto & { id: string }) =>
      cardControllerRemoveTag(id, other),
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: boardKey });
      await queryClient.invalidateQueries({
        queryKey: [...cardKey, { id: vars.id }],
      });
    },
  });
};

export const useAttachFileMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, files }: { id: string; files: FileList }) => {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        const newFile = new File([file], encodeURI(file.name), {
          type: file.type,
        });
        formData.append("files", newFile);
      });

      const blobs = Array.from(files).map((file) => {
        const newFile = new File([file], encodeURI(file.name), {
          type: file.type,
        });
        return new Blob([newFile], { type: file.type });
      });

      return cardControllerAttachFile(
        id,
        {
          files: blobs,
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
          data: formData,
        },
      );
    },
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: boardKey });
      await queryClient.invalidateQueries({
        queryKey: [...cardKey, { id: vars.id }],
      });
    },
  });
};

export const useDetachFileMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...other }: DetachFileDto & { id: string }) =>
      cardControllerDetachFile(id, other),
    async onMutate({ id, filename }) {
      await queryClient.cancelQueries({ queryKey: [...cardKey, { id: id }] });

      const prev = queryClient.getQueryData([...cardKey, { id: id }]);

      queryClient.setQueryData(
        [...cardKey, { id: id }],
        (old: CardDto): CardDto => ({
          ...old,
          files: old.files.filter((file) => file.name !== filename),
        }),
      );

      return prev;
    },
    onError(error, variables, context) {
      queryClient.setQueryData([...cardKey, { id: variables.id }], context);
    },
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: boardKey });
      await queryClient.invalidateQueries({
        queryKey: [...cardKey, { id: vars.id }],
      });
    },
  });
};
