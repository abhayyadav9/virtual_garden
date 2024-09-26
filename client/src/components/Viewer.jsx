import React, { useEffect } from 'react';

const Viewer = ({ panoramaImage }) => {
  useEffect(() => {
    console.log(window.pannellum); // Check if Pannellum is loaded
    if (window.pannellum) {
      window.pannellum.viewer('panorama', {
        type: 'equirectangular',
        panorama: panoramaImage,
        autoLoad: true,
      });
    } else {
      console.error('Pannellum not found');
    }
  }, [panoramaImage]);

  return (
    <div
      id="panorama"
      style={{ width: '100%', height: '500px' }}
    >
      {/* Pannellum viewer will initialize here */}
    </div>
  );
};

export default Viewer;
