import { useQuery } from "@tanstack/react-query";
import { projectDetails } from "../../services/apiProjects";
import { useParams } from "react-router-dom";
import { Project } from "../../utils/types/projectData";

export const useProjectDetails = () => {
  const { id } = useParams<{id:string}>();

  const { data: project, isLoading } = useQuery<Project, Error>({
    queryKey: ["project", id],
    queryFn: () => projectDetails(id), // ✅ wrap in function
    enabled: !!id,
  });

  return { project, isLoading };
};
