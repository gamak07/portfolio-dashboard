import { useQuery } from "@tanstack/react-query";
import { blogPosts } from "../../services/apiBlogPost";

export const useBlogPosts = () => {
  const { data: getBlog, isLoading: isFetching } = useQuery({
    queryFn: blogPosts,
    queryKey: ["blogs"],
  });

  return { getBlog, isFetching };
};
