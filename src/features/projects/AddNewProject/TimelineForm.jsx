import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const TimelineForm = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDiff = end - start;

      if (!isNaN(timeDiff) && timeDiff >= 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        setValue("duration", `${days} day(s)`);
      } else {
        setValue("duration", "");
      }
    } else {
      setValue("duration", "");
    }
  }, [startDate, endDate, setValue]);

  return (
    <div className="space-y-4 overflow-y-auto p-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label
            htmlFor="startDate"
            className="mb-1 text-sm font-medium text-gray-800"
          >
            Start Date
          </label>
          <input
            type="date"
            {...register("startDate")}
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="endDate"
            className="mb-1 text-sm font-medium text-gray-800"
          >
            End Date
          </label>
          <input
            type="date"
            {...register("endDate")}
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.endDate && (
            <p className="text-sm text-red-500">{errors.endDate.message}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="duration"
          className="mb-1 text-sm font-medium text-gray-800"
        >
          Duration
        </label>
        <input
          type="text"
          {...register("duration")}
          disabled
          className="w-full rounded-md border border-gray-200 bg-gray-300 px-3 py-2 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Calculated automatically"
        />
        <span className="text-xs font-medium text-gray-500">
          Automatically calculated from start to end dates
        </span>
      </div>
    </div>
  );
};

export default TimelineForm;
