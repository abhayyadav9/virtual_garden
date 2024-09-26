import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const GardenLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main content area for the selected section */}
      <div className="ml-24  md:ml-auto">
        {/* Outlet will render the child routes like PlantGallery */}
        <Outlet />
      </div>
    </div>
  );
};

export default GardenLayout;
