import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlogPost } from "../../services/apiBlogPost";

type DeleteBlogProp = {
  blogId: string | number;
};

export const useDeleteBlogPost = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteBlog, isPending: isDeleting } = useMutation<unknown, Error, DeleteBlogProp>({
    mutationFn: ({ blogId }) => deleteBlogPost(blogId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      }),
  });

  return { deleteBlog, isDeleting };
};
