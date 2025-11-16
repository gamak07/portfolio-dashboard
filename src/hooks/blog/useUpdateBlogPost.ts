import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editBlogPost } from "../../services/apiBlogPost";
import { UpdateBlogVariables } from "../../utils/types/blogData";



export const useUpdateBlogPost = () => {
  const queryClient = useQueryClient();
  const { mutate: editBlog, isPending: isEditing } = useMutation<unknown, Error, UpdateBlogVariables>({
    mutationFn: ({ id, blogData, blogImage }) =>
      editBlogPost(id, blogData, blogImage),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey:["blogs"]});
    },
  });

  return { editBlog, isEditing };
};
