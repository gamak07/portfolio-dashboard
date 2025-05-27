import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zhvhapxzzwryyclvqgof.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpodmhhcHh6endyeXljbHZxZ29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyODE0OTUsImV4cCI6MjA2Mzg1NzQ5NX0.88vLcA4TMfEiKNGuSsMRp_Db14EE6HlIrd3oHqBLAT0";

export const supabase = createClient(supabaseUrl, supabaseKey);
