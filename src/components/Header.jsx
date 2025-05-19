import React, { useState } from "react";
import { FaBell, FaChevronDown, FaMoon, FaSearch, FaSun } from "react-icons/fa";
import Button from "./Button";
import NotificationDropdown from "./NotificationDropdown";
import { useTheme } from "../contexts/ThemeContext";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
  const { dark, toggle } = useTheme();

  const [showNotification, setShowNotification] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const handleNotification = () => {
    setShowNotification((prev) => !prev);
  };

  const handleAccount = () => {
    setShowAccount((prev) => !prev);
  };
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 md:px-6 dark:border-gray-700 dark:bg-gray-800">
      <div className="relative">
        <FaSearch className="absolute top-1/2 -translate-y-1/2 transform pl-2 text-2xl" />
        <input
          type="text"
          className="w-72 rounded-lg border border-gray-300 py-2 pr-2 pl-10 outline-0 focus:ring-2 focus:ring-blue-600 dark:bg-white"
          placeholder="search..."
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative" onClick={handleNotification}>
          <Button className="cursor-pointer p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
            <FaBell />
            <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>
          </Button>
          {showNotification && <NotificationDropdown />}
        </div>
        <Button
          className="cursor-pointer p-2 text-gray-500 hover:text-blue-600"
          onClick={toggle}
        >
          {dark ? <FaSun /> : <FaMoon />}
        </Button>
        <div className="relative" onClick={handleAccount}>
          <Button className="flex cursor-pointer items-center space-x-2">
            <div className="textsm flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 font-medium text-white">
              GM
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Ganiyu Mubarak
            </span>
            <FaChevronDown className="text-xs text-gray-500 dark:text-gray-400" />
          </Button>
          {showAccount && <ProfileDropdown />}
        </div>
      </div>
    </header>
  );
};

export default Header;
