import { data } from "react-router-dom";
import { supabase } from "./supabase";

export const getProjects = async () => {
  const { data, error } = await supabase.from("projects").select("*");

  if (error) throw new Error("Error fetching data");

  return data
};
