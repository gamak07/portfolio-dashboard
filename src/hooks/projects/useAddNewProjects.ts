import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProjects } from "../../services/apiProjects";
import { ProjectInsert } from "../../utils/types/projectData";
// Import the payload type we created

// Define the shape of the variables for this mutation
type AddProjectVariables = {
  projectData: ProjectInsert;
  thumbnailFile: File | null;
  galleryFiles: File[];
};

export const useAddNewProjects = () => {
  const queryClient = useQueryClient();

  // Add generic types to useMutation
  const { mutate: addProject, isPending: isCreating } = useMutation<
    unknown, // Type of data returned (we don't need it, so unknown)
    Error,   // Type of error
    AddProjectVariables // Type of variables passed to mutationFn
  >({
    // These variables are now strongly typed
    mutationFn: ({ projectData, thumbnailFile, galleryFiles }) => {
      return addNewProjects(projectData, thumbnailFile, galleryFiles);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },

    // Type the error parameter
    onError: (err: Error) => {
      console.error(err.message);
    },
  });

  return { addProject, isCreating };
};