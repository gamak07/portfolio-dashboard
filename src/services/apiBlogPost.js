import { supabase } from "./supabase";

// upload image to supabase
export const uploadImage = async (file) => {
  const uniqueName = `${Date.now()}-${Math.random()}`;
  console.log("uploading file to supabase", uniqueName);
  const { error: uploadError } = await supabase.storage
    .from("project-images")
    .upload(`blog_posts/${uniqueName}`, file);

  if (uploadError) {
    console.error(uploadError.message, "Error uploading the image");
    return null;
  }

  const { data: urlData, error: urlError } = supabase.storage
    .from("project-images")
    .getPublicUrl(`blog_posts/${uniqueName}`);

  if (urlError) {
    console.error("url error", urlError.message);
    return null;
  }

  return urlData?.publicUrl || null;
};

// read and get all blog posts
export const getBlogPosts = async () => {
  const { data, error } = await supabase.from("blog_posts").select("*");
  if (error) {
    console.error(error, "error message");
  }

  return data;
};

// create a new blog post
export const createBlogPost = async (blogData, blogImage) => {
  let blogUrl = null;
  if (blogImage) {
    blogUrl = await uploadImage(blogImage);
  }
  // if (!blogUrl) console.error("error uploading image to supabase");

  const fullBlogData = {
    ...blogData,
    featured_image_url: blogUrl,
  };
  const { data, error } = await supabase
    .from("blog_posts")
    .insert([fullBlogData])
    .select()
    .single();

  if (error) {
    console.error(error.message, "error message");
  }

  return data;
};

// edit blog post

export const editBlogPost = async (id, blogData, blogImage) => {
  let blogUrl = blogData.featured_image_url;
  if (blogImage) {
    blogUrl = await uploadImage(blogImage);
  }
  // if (!blogUrl) console.error("error uploading image to supabase");

  const updatedData = {
    ...blogData,
    featured_image_url:blogUrl
  }
  const { data, error } = await supabase
    .from("blog_posts")
    .update(updatedData)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error.message);
  }

  return data
};


export const deleteBlogPost = async (id) => {
  const { data: blog, error: fetchError } = await supabase
    .from("blog_posts")
    .select('featured_image_url')
    .eq("id", id)
    .single();

  if (fetchError) {
    console.error("error fetching image urls", fetchError);
  }
  const pathsToDelete = [];
  if (blog.featured_image_url) pathsToDelete.push(blog.featured_image_url);

  if (pathsToDelete.length > 0) {
    const { error: storageError } = await supabase.storage
      .from("project-images")
      .remove(pathsToDelete);
    if (storageError) {
      console.error("error deleting image from bucket", storageError);
      return;
    }
  }
  const { error: deleteError } = await supabase
    .from("blog_posts")
    .delete()
    .eq("id", id);
  if (deleteError) {
    console.error("error deleting row", deleteError);
  }
};

