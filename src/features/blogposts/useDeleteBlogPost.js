import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlogPost } from "../../services/apiBlogPost";

export const useDeleteBlogPost = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteBlog, isPending: isDeleting } = useMutation({
    mutationFn: ({blogId}) =>  deleteBlogPost(blogId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      }),
  });

  return { deleteBlog, isDeleting };
}