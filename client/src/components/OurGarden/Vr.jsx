import React from 'react';

const Vr = () => {
  return (
    <div>
      {/* Object Name: 3D Viewer */}
      <h2>3D Room Viewer</h2> {/* Descriptive text */}
      <iframe 
        src="https://planner5d.com/v?viewMode=3d&key=814464cb06772afd183c0380f81ff240" 
        style={{ width: '950px', height: '550px', border: 'none' }} 
        allowFullScreen
        title="3D Viewer" // This is the title used to identify the object
      ></iframe>
    </div>
  );
}

export default Vr;
