// src/components/ToggleSwitch.jsx
import React, { useState } from "react";
import { supabase } from "../../services/supabase";

interface Props{
  label:string
  featured: boolean
  id: string|number
}

export default function ToggleSwitch({ label, featured, id }:Props) {
  const [checked, setChecked] = useState<boolean>(featured);

  const toggleChecked = async () => {
    setChecked((prev) => !prev);

    try {
      const { error } = await supabase
        .from("projects")
        .update({ featured: !checked })
        .eq("id", id);
      if (error) throw error;
    } catch (err) {
      console.error(err);
      setChecked(false);
    }
  };
  return (
    <div className="mt-6 flex items-center gap-2">
      {label && (
        <span className="text-sm font-medium text-gray-700">{label}</span>
      )}

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={toggleChecked}
        className={`flex h-8 w-14 items-center rounded-full p-1 transition-colors duration-300 ${
          checked ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <span
          className={`h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
