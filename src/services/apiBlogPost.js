import { supabase } from "./supabase";

// upload image to supabase
export const uploadImage = async (file) => {
  const uniqueName = `${Date.now()}-${Math.random()}`;
  console.log("uploading file to supabase", uniqueName);
  const { data, error: uploadError } = await supabase.storage
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
