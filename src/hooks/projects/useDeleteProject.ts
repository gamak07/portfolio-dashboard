import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProject } from "../../services/apiProjects";

// Define the shape of the variables for this mutation
type DeleteProjectVariables = {
  id: string | number; // Or just string/number if you know your ID type
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  // Add generic types to useMutation
  const { mutate: delProject, isPending: isDeleting } = useMutation<
    unknown, // Type of data returned
    Error, // Type of error
    DeleteProjectVariables // Type of variables passed to mutationFn
  >({
    // 'id' is now strongly typed
    mutationFn: ({ id }) => deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  return { delProject, isDeleting };
};
