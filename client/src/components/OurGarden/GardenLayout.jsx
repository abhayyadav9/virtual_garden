import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const GardenLayout = () => {
  return (
    <div className="flex ">
      {/* Sidebar */}
      <SideBar />

      {/* Main content area for the selected section */}
      <div className=" ml-80  mt-6 ">
        {/* Outlet will render the child routes like PlantGallery */}
        <Outlet />
      </div>
    </div>
  );
};

export default GardenLayout;
