import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlogPost } from "../../services/apiBlogPost";

export const useAddBlogPost = () => {
  const queryClient = useQueryClient();
  const { mutate: addBlog, isPending: isCreating } = useMutation({
    mutationFn: ({ blogData, blogImage }) => createBlogPost(blogData, blogImage),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      }),
  });

  return { addBlog, isCreating };
};
