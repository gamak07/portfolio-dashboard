import { supabase } from "../services/supabase";

export const getImageUrl = (path: string) => {
  return supabase.storage.from("project-images").getPublicUrl(path).data
    .publicUrl;
};
