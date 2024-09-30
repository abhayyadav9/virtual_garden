import { useUser } from "@/components/contexts/useContext";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const {user} = useUser()

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/logout",
        {},
        { withCredentials: true } // Ensure this is passed separately in the second parameter
      );
      if (response.status === 200) {
        toast.success("Logout successfully!");
        navigate("/login"); // Navigate to the login page after successful logout
      }
    } catch (error) {
      console.error(error);
      toast.error("Error during logout");
    }
  };

  return (
    <div className="w-1/4 fixed bg-gray-200 p-4 h-screen">
      <h1 className="text-2xl font-bold mb-4">
      {user?.gender === 'female' ? (
          <h1>Hello Mrs. {user.username}</h1>
        ) : (
          <h1>Hello Mr. {user?.username}</h1>
        )}

      </h1>
      <ul className="space-y-2">
        <li>
          <Link
            to="/admin-dashboard"
            className="w-full text-left p-2 block bg-gray-300 hover:bg-gray-400"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="admin-profile"
            className="w-full text-left p-2 block bg-gray-300 hover:bg-gray-400"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="publish"
            className="w-full text-left p-2 block bg-gray-300 hover:bg-gray-400"
          >
            Publish
          </Link>
        </li>
        <li>
          <Link
            to="contribution"
            className="w-full text-left p-2 block bg-gray-300 hover:bg-gray-400"
          >
            Contribution
          </Link>
        </li>
        <li>
          <Link
            to="event-mangement"
            className="w-full text-left p-2 block bg-gray-300 hover:bg-gray-400"
          >
            Event Mangement
          </Link>
        </li>
        <li
          onClick={handleLogout} // Reference the function, don't invoke it
          className="w-full text-left p-2 block bg-gray-300 hover:bg-gray-400 cursor-pointer"
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
