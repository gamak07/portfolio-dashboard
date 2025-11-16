// components/TeamForm.jsx
import React, { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import Button from "../../../components/Button";
import { FaCirclePlus } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { ProjectFormData } from "../../../utils/types/projectData";

const TeamForm = () => {
  const {
    register,
    control,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext<ProjectFormData>();

  // Local state for the tag input
  const [tagInput, setTagInput] = useState("");

  // Field array for teamMembers (array of { name, role })
  const {
    fields: memberFields,
    append: appendMember,
    remove: removeMember,
  } = useFieldArray({
    control,
    name: "team_members",
  });

  // Watch the tags array (string[])
  const tags = watch("tags") || [];

  // Add a new tag to the tags array
  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (!trimmed) return;
    const existing = getValues("tags") || [];
    if (existing.includes(trimmed)) {
      setTagInput("");
      return;
    }
    setValue("tags", [...existing, trimmed], { shouldValidate: true });
    setTagInput("");
  };

  // Remove a tag by index
  const handleRemoveTag = (indexToRemove: number) => {
    const current = getValues("tags") || [];
    const updated = current.filter((_, idx) => idx !== indexToRemove);
    setValue("tags", updated, { shouldValidate: true });
  };

  return (
    <div className="space-y-4 overflow-x-auto p-4">
      {/* Tags */}
      <div>
        <label
          htmlFor="tags"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Tags
        </label>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={tagInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTagInput(e.target.value)
            }
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Add tag..."
          />
          <Button
            type="button"
            onClick={handleAddTag}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Add
          </Button>
        </div>
        {errors.tags && (
          <p className="text-sm text-red-500">{errors.tags?.message}</p>
        )}
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(idx)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTimes size={12} />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <label
          htmlFor="category"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Category
        </label>
        <select
          {...register("category")}
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select category</option>
          <option value="Personal">Personal</option>
          <option value="Freelance">Freelance</option>
          <option value="Hackhaton">Hackhaton</option>
        </select>
        {errors.category && (
          <p className="text-sm text-red-500">{errors.category?.message}</p>
        )}
      </div>

      {/* Team Members */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium text-gray-800">
            Team Members
          </label>
          <Button
            type="button"
            onClick={() => appendMember({ name: "", role: "" })}
            className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-200"
          >
            <FaCirclePlus size={15} /> Add Member
          </Button>
        </div>
        {errors.team_members && (
          <p className="text-sm text-red-500">{errors.team_members?.message}</p>
        )}
        <div className="space-y-3">
          {memberFields.map((field, index) => (
            <div
              key={field.id}
              className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3"
            >
              <div className="flex-1">
                <input
                  type="text"
                  {...register(`team_members.${index}.name`)}
                  placeholder="Name"
                  className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.team_members?.[index]?.name && (
                  <p className="text-sm text-red-500">
                    {errors.team_members?.[index]?.name?.message}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  {...register(`team_members.${index}.role`)}
                  placeholder="Role"
                  className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.team_members?.[index]?.role && (
                  <p className="text-sm text-red-500">
                    {errors.team_members?.[index]?.role?.message}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => removeMember(index)}
                className="self-start text-red-500 hover:text-red-700 md:self-auto"
              >
                <FaTimes size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamForm;
