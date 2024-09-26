import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./contexts/useContext";

const ProtectRoute = ({ children }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login if user is not authenticated
    }else{
        navigate("/admin-dashboard");
    }
  }, [user, navigate]);

  return user ? children : null; // Render children only if user is authenticated
};

export default ProtectRoute;
