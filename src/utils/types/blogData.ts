
export type BlogDataPayload ={
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  meta_description: string;
  tags: string[];
  is_published: boolean;
  published_at: string | null;
}

// This is the shape of the object passed to the mutation
export type AddBlogVariables= {
  blogData: BlogDataPayload;
  blogImage: FileList | null;
}

export type UpdateBlogVariables = {
  id: any; // Use string or number if you know it
  blogData: BlogDataPayload;
  blogImage: File | null;
};
