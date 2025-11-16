import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Button from "../../components/Button";

const TestimonialDetails = ({ setShowModal }:{setShowModal:any}) => {
  const [changeStatus, setChangeStatus] = useState("Published");
  const handleStatusChange = (status:string) => {
    setChangeStatus(status);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-white shadow-xl dark:bg-gray-800">
        <div className="border-b p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Testimonial Details
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Client Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-0 focus:ring-2 focus:ring-blue-600 dark:border-gray-600"
                  value="Michael Chen"
                  disabled
                />
              </div>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Client Photo
                </label>
                <img
                  src="/human.jpg"
                  alt=""
                  className="h-16 w-16 rounded-full object-cover"
                />
              </div>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Rating
                </label>
                <div className="flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Status
                </label>
                <div className="flex items-center space-x-2">
                  <div
                    className={`relative inline-block h-6 w-10 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${changeStatus === "Published" ? "bg-green-500" : "bg-gray-300"}`}
                    onClick={() =>
                      handleStatusChange(
                        changeStatus === "Published" ? "Pending" : "Published",
                      )
                    }
                  >
                    <span
                      className={`absolute top-1 left-1 h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${changeStatus === "Published" ? "translate-x-4" : "translate-x-0"}`}
                    ></span>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-400">
                    {changeStatus}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Testimonial Text
                </label>
                <textarea
                  className="h-40 w-full rounded-lg border border-gray-300 px-3 py-2 outline-0 focus:ring-2 focus:ring-blue-600 dark:border-gray-600"
                  disabled
                >
                  Great experience overall. The product quality is excellent and
                  customer service was responsive. There were some minor delays
                  in delivery, but they kept me informed throughout the process.
                </textarea>
              </div>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600"
                  value="2025-01-20"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-3 border-t p-6">
          <Button
            className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
            onClick={() => setShowModal(null)}
          >
            Cancel
          </Button>
          <Button className="cursor-pointer rounded-lg border border-gray-300 bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:border-gray-600">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;
