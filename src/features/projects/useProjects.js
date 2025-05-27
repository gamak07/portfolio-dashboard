import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../services/apiProjects";

export const useProjects = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return { data, isLoading, error };
};
