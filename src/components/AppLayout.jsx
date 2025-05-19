import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex flex-1 flex-col transition-all duration-300 ease-in-out">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
