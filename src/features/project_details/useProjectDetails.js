import { useQuery } from "@tanstack/react-query";
import { projectDetails } from "../../services/apiProjects";
import { useParams } from "react-router-dom";

export const useProjectDetails = () => {
  const { id } = useParams();

  const { data: project, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => projectDetails(id), // ✅ wrap in function
    enabled: !!id,
  });

  return { project, isLoading };
};
