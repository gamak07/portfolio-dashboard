import React, { useRef, useState, useEffect } from "react";
import { RiImageLine, RiImageAddLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { FormLabel } from "@/components/ui/form";

interface ThumbnailUploaderProps {
  initialImage?: string | null;
  onFileSelect: (file: File) => void;
}

export default function ThumbnailUploader({ initialImage, onFileSelect }: ThumbnailUploaderProps) {
  const [preview, setPreview] = useState<string | null>(initialImage || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

// 1. Construct the Full URL
  const getFullImageUrl = (path: string | null) => {
    if (!path) return null;

    // If it's already a full URL (http) or a local upload (blob), use it as is
    if (path.startsWith("http") || path.startsWith("blob:")) {
      return path;
    }

    // Otherwise, build the Supabase Storage URL
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    
    if (!supabaseUrl) {
      console.error("❌ NEXT_PUBLIC_SUPABASE_URL is missing from .env.local");
      return null;
    }

    // Format: https://[project].supabase.co/storage/v1/object/public/[bucket]/[path]
    // Ensure 'portfolio' matches your Supabase Storage Bucket name exactly
    const fullUrl = `${supabaseUrl}/storage/v1/object/public/portfolio/${path}`;
    
    console.log("🖼️ Generated Preview URL:", fullUrl); // Check your console for this!
    return fullUrl;
  };

  // 2. Sync state when initialImage changes (Edit Mode)
  useEffect(() => {
    const url = getFullImageUrl(initialImage ?? null);
    setPreview(url);
  }, [initialImage]);

  // Cleanup local blob URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      if (preview && preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPreview(URL.createObjectURL(file));
      onFileSelect(file);
    }
  };

  return (
    <div>
      <FormLabel className="text-slate-300 block mb-3">Thumbnail</FormLabel>
      <div
        onClick={() => fileInputRef.current?.click()}
        className={cn(
          "relative border-2 border-dashed border-slate-600 rounded-lg p-8 text-center cursor-pointer group transition-colors overflow-hidden",
          preview
            ? "border-cyan-500 bg-slate-700/50 p-2"
            : "hover:border-cyan-500 hover:bg-slate-700/30"
        )}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />

        {preview ? (
          <div className="relative w-full h-64 rounded-md overflow-hidden group-hover:opacity-90 transition-opacity">
            <img
              src={preview}
              alt="Thumbnail Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-medium flex items-center">
                <RiImageAddLine className="mr-2" /> Click to change
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <RiImageAddLine className="text-3xl text-slate-400 group-hover:text-cyan-400 mb-2" />
            <p className="text-white">Click to upload</p>
          </div>
        )}
      </div>
    </div>
  );
}