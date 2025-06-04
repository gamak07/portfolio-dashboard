import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProject } from "../../services/apiProjects";

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  const { mutate: delProject, isPending: isDeleting } = useMutation({
    mutationFn: ({ id }) => deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
    },
  });

  return { delProject, isDeleting };
};
