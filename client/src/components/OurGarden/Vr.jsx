
import React from 'react';

const Vr = () => {
  return (
    <div>
      <iframe 
        src="https://planner5d.com/v?viewMode=3d&key=814464cb06772afd183c0380f81ff240" 
        style={{ width: '950px', height: '550px', border: 'none' }} 
        allowFullScreen
        title="3D Viewer"
      ></iframe>
    </div>
  );
}

export default Vr;
