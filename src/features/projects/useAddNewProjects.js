import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProjects } from "../../services/apiProjects";

export const useAddNewProjects = () => {
  const queryClient = useQueryClient();
  const { mutate: addProject, isPending: isCreating } = useMutation({
    mutationFn: ({ projectData, thumbnailFile, galleryFiles }) => {
      return addNewProjects(projectData, thumbnailFile, galleryFiles);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },

    onError: (err) => {
      console.error(err.message);
    },
  });

  return { addProject, isCreating };
};
