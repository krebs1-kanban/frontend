import {
  UpdateProjectDto,
  projectControllerCreate,
  projectControllerGet,
  projectControllerGetById,
  projectControllerUpdate,
  projectLinkControllerGenerate,
  projectLinkControllerRemove,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const projectKey = ["project"];

export const useGetProjectsWhereMemberQuery = () => {
  return useQuery({
    queryKey: projectKey,
    queryFn: projectControllerGet,
  });
};

export const useGetProjectById = (id: string) => {
  return useQuery({
    queryKey: [...projectKey, { id }],
    queryFn: () => projectControllerGetById(id),
  });
};

export const useCreateProjectMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: projectControllerCreate,
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: projectKey });
    },
  });
};

export const useUpdateProjectMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...other }: UpdateProjectDto & { id: string }) =>
      projectControllerUpdate(id, other),
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: projectKey });
    },
  });
};

export const useCreateInviteLink = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id }: { id: string }) => projectLinkControllerGenerate(id),
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: projectKey });
    },
  });
};

export const useDeleteInviteLink = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id }: { id: string }) => projectLinkControllerRemove(id),
    async onSettled(data, err, vars, context) {
      await queryClient.invalidateQueries({ queryKey: projectKey });
    },
  });
};
