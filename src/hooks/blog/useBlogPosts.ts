import { useQuery } from "@tanstack/react-query";
import { getBlogPosts } from "../../services/apiBlogPost";

export const useBlogPosts = () => {
  const { data: getBlog, isLoading: isFetching } = useQuery({
    queryFn: getBlogPosts,
    queryKey: ["blogs"],
  });

  return { getBlog, isFetching };
};
