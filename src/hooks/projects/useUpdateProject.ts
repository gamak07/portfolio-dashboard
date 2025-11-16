import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProject } from "../../services/apiProjects";
import { ProjectUpdate } from "../../utils/types/projectData";
// Import the payload type
// import { ProjectUpdate } from "../../types/projectTypes";

// Define the shape of the variables for this mutation
type UpdateProjectVariables = {
  id: string | number; // Or just string/number if you know your ID type
  projectData: ProjectUpdate;
  thumbnailFile: File | null;
  galleryFiles: File[];
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  // Add generic types to useMutation
  const { isPending, mutate: editProject } = useMutation<
    unknown, // Type of data returned
    Error,   // Type of error
    UpdateProjectVariables // Type of variables passed to mutationFn
  >({
    // These variables are now strongly typed
    mutationFn: ({ id, projectData, thumbnailFile, galleryFiles }) => {
      return updateProject(id, projectData, thumbnailFile, galleryFiles);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] }); // Refreshes the list after update
    },
  });

  return { isPending, editProject };
};