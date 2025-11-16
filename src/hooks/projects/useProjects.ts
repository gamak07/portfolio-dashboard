import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../services/apiProjects";
import { Project } from "../../utils/types/projectData";
// Import the main Project type
// import { Project } from "../../types/projectTypes";

export const useProjects = () => {
  // Add generic types for Data (Project[]) and Error
  const { data, isLoading, error } = useQuery<Project[], Error>({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  // The returned 'data' is now strongly typed as Project[] | undefined
  return { data, isLoading, error };
};