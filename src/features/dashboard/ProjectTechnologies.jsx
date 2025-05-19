import React, { useState } from "react";
import Button from "../../components/Button";
import {
  FaDownload,
  FaEllipsisH,
  FaExpand,
  FaImage,
  FaSync,
} from "react-icons/fa";
import ChartMenu from "./ChartMenu";

const ProjectTechnologies = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Project Technologies
        </h2>
        <div className="relative">
          <Button
            className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            onClick={handleToggleMenu}
          >
            <FaEllipsisH />
          </Button>
          {toggleMenu && (
            <ChartMenu>
              <div className="py-1">
                <Button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                  <FaDownload className="w-5" />
                  Download Data
                </Button>
                <Button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                  <FaImage className="w-5" />
                  Export as Image
                </Button>
                <Button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                  <FaSync className="w-5" />
                  Refresh Data
                </Button>
                <Button className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                  <FaExpand className="w-5" />
                  View Full Screen
                </Button>
              </div>
            </ChartMenu>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectTechnologies;
