import React, { useState } from "react";
import { RiAddLine, RiCloseLine } from "react-icons/ri";
import { Input } from "@/components/ui/input";
import { FormLabel, FormMessage } from "@/components/ui/form";

interface TagManagerProps {
  tags: string[];
  onChange: (tags: string[]) => void;
}

export default function TagManager({ tags = [], onChange }: TagManagerProps) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const tag = inputValue.trim();
    if (tag && !tags.includes(tag)) {
      onChange([...tags, tag]);
      setInputValue("");
    }
  };

  const handleRemove = (tagToRemove: string) => {
    onChange(tags.filter((t) => t !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div>
      <FormLabel className="text-slate-300 mb-3">Tags</FormLabel>
      <div className="flex gap-2 mb-3">
        <Input
          placeholder="Add a tag..."
          className="bg-slate-700 border-slate-600 text-white focus-visible:ring-cyan-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          onClick={handleAdd}
          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md"
        >
          <RiAddLine className="w-5 h-5" />
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-slate-700 border border-slate-600 rounded-full text-slate-300 text-sm flex items-center gap-2"
          >
            {tag}
            <button type="button" onClick={() => handleRemove(tag)}>
              <RiCloseLine />
            </button>
          </span>
        ))}
      </div>
      <FormMessage />
    </div>
  );
}