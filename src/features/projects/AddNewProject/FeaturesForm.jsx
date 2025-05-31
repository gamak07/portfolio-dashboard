import React from "react";
import { useFormContext } from "react-hook-form";

const FeaturesForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4 overflow-x-auto p-4">
      {/* Features */}
      <div>
        <label
          htmlFor="features"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Features
        </label>
        <textarea
          {...register("features")}
          rows="5"
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="List each feature on a new line..."
        ></textarea>
        {errors.features && (
          <p className="text-sm text-red-500">{errors.features.message}</p>
        )}
      </div>

      {/* Challenges */}
      <div>
        <label
          htmlFor="challenges"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Challenges
        </label>
        <textarea
          {...register("challenges")}
          rows="5"
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Describe the challenges you faced..."
        ></textarea>
        {errors.challenges && (
          <p className="text-sm text-red-500">{errors.challenges.message}</p>
        )}
      </div>

      {/* Learnings */}
      <div>
        <label
          htmlFor="learnings"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Learnings
        </label>
        <textarea
          {...register("learnings")}
          rows="5"
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="What did you learn from this project?"
        ></textarea>
        {errors.learnings && (
          <p className="text-sm text-red-500">{errors.learnings.message}</p>
        )}
      </div>
    </div>
  );
};

export default FeaturesForm;
