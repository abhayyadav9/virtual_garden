import React from "react";
import { useLocation } from "react-router-dom";
import Embed from "../homeComponents/Embed";

const View3D = () => {
  const location = useLocation();
  const { embed } = location.state || {}; // Get the embed data from state

  return (
    <div>
      <h1>3D View</h1>
      {<Embed embed={embed} />}
    </div>
  );
};

export default View3D;
