import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import Button from "../../../components/Button";

const TechForm = () => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  const [inputValue, setInputValue] = useState("");

  const handleAddTech = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const currentStack = getValues("techStack") || [];
    if (currentStack.includes(trimmed)) return; // Prevent duplicates

    const updated = [...currentStack, trimmed];
    setValue("techStack", updated);
    setInputValue(""); // clear input
  };

  const handleRemoveTech = (tech) => {
    const current = getValues("techStack") || [];
    const updated = current.filter((t) => t !== tech);
    setValue("techStack", updated);
  };

  return (
    <div className="space-y-4 overflow-auto p-4">
      <div>
        <label
          htmlFor="techStack"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Tech Stack
        </label>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Add technology..."
          />
          <Button
            type="button"
            onClick={handleAddTech}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Add
          </Button>
        </div>
        {errors.techStack && (
          <p className="text-sm text-red-500">{errors.techStack.message}</p>
        )}
        <div className="mt-2 flex flex-wrap gap-2">
          {getValues("techStack")?.map((tech, index) => (
            <span
              key={index}
              className="flex items-center gap-1 rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700"
            >
              {tech}
              <button
                type="button"
                onClick={() => handleRemoveTech(tech)}
                className="text-red-500 hover:text-red-700"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div>
          <label
            htmlFor="frontend"
            className="mb-1 text-sm font-medium text-gray-800"
          >
            Frontend
          </label>
          <input
            type="text"
            {...register("frontend")}
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="React, NextJs, etc."
          />
        </div>
        <div>
          <label
            htmlFor="backend"
            className="mb-1 text-sm font-medium text-gray-800"
          >
            Backend
          </label>
          <input
            type="text"
            {...register("backend")}
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Node, Express, etc."
          />
        </div>
        <div>
          <label
            htmlFor="database"
            className="mb-1 text-sm font-medium text-gray-800"
          >
            Database
          </label>
          <input
            type="text"
            {...register("database")}
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="PostgreSQL, MongoDB"
          />
        </div>
      </div>
    </div>
  );
};

export default TechForm;
