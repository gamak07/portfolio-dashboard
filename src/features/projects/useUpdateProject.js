import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProject } from "../../services/apiProjects";

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: editProject } = useMutation({
    mutationFn: ({ id, projectData, thumbnailFile, galleryFiles }) => {
      return updateProject(id, projectData, thumbnailFile, galleryFiles);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]); // Refreshes the list after update
    },
  });

  return {isPending, editProject}
};
