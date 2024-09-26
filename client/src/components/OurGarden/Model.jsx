import { useGLTF } from "@react-three/drei";
import React from "react";

const Model = () => {
  const { scene } = useGLTF("/assests/scene.gltf");

  return <primitive object={scene} />;
};

export default Model;
