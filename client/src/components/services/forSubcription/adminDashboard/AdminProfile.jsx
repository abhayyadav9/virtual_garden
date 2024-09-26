import { useUser } from "@/components/contexts/useContext";
import React from "react";
import { Link } from "react-router-dom";

const AdminProfile = () => {
  const { user } = useUser(); // Fetch user details from context

  return (
    <div className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-8 ">
      {user ? (
        <div>
          <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100 animate-fadeIn">
            Admin Profile
          </h1>
          <div className="space-y-4">
            <div className=" flex flex-row justify-between">
              <p className="animate-fadeIn mt-10">
                <strong className="text-gray-600  dark:text-gray-300">
                  Username:
                </strong>{" "}
                {user.username}
              </p>
              <p className="animate-fadeIn">
                <img
                  src={user?.profilePic}
                  alt="profile pic"
                  className="h-24 w-24  rounded-full"
                />
              </p>
            </div>
            <p className="animate-fadeIn">
              <strong className="text-gray-600 dark:text-gray-300">
                Email:
              </strong>{" "}
              {user.email}
            </p>
            <p className="animate-fadeIn">
              <strong className="text-gray-600 dark:text-gray-300">
                Phone:
              </strong>{" "}
              {user.phone}
            </p>
            <p className="animate-fadeIn">
              <strong className="text-gray-600 dark:text-gray-300">
                Date of Birth:
              </strong>{" "}
              {user.dob}
            </p>
            <p className="animate-fadeIn">
              <strong className="text-gray-600 dark:text-gray-300">
                Gender:
              </strong>{" "}
              {user.gender}
            </p>
          </div>

          <Link to="/admin-dashboard/edit-admin-profile">
            <button
              type="submit"
              className="w-full mt-11 py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Edit Information
            </button>
          </Link>
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-300 animate-fadeIn">
          Loading profile details...
        </p>
      )}
    </div>
  );
};

export default AdminProfile;
