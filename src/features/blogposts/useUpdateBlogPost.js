import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editBlogPost } from "../../services/apiBlogPost";

export const useUpdateBlogPost = () => {
  const queryClient = useQueryClient();
  const { mutate: editBlog, isPending: isEditing } = useMutation({
    mutationFn: ({ id, blogData, blogImage }) =>
      editBlogPost(id, blogData, blogImage),
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
    },
  });

  return { editBlog, isEditing };
};
