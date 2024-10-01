import React from "react";

const Vr = () => {
  return (
    <div className="justify-center">
      {/* Object Name: 3D Viewer */}
      <h1 className="p-2">3D View Of Garden</h1> {/* Descriptive text */}
      <iframe
        src="https://planner5d.com/v?viewMode=3d&key=814464cb06772afd183c0380f81ff240"
        style={{ width: "950px", height: "500px", border: "none" }}
        allowFullScreen
        title="3D Viewer" // This is the title used to identify the object
      ></iframe>
      
    </div>
  );
};

export default Vr;
