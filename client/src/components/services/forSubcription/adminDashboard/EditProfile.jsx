import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useUser } from '@/components/contexts/useContext';
import { useNavigate } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa'; // Import camera icon
import { FaSpinner } from 'react-icons/fa'; // Import spinner icon for loading

const EditProfile = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useUser(); // Ensure updateUser is being extracted from context
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    phone: user?.phone || '',
    dob: user?.dob || '',
    gender: user?.gender || '',
  });
  const [profilePic, setProfilePic] = useState(null); // State for profile picture
  const [loading, setLoading] = useState(false); // Loading state for button

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]); // Set profile picture file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when form is submitted

    // Create a FormData object to handle the file upload
    const data = new FormData();
    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("dob", formData.dob);
    data.append("gender", formData.gender);
    if (profilePic) {
      data.append("profilePic", profilePic); // Add the profile picture
    }

    try {
      const response = await axios.put(
        'http://localhost:8000/api/v1/user/edit-details',
        data,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      updateUser(response.data.user); // Update user globally
      toast.success('Profile updated successfully!');
      navigate('/admin-dashboard/admin-profile');
    } catch (error) {
      console.error(error);
      toast.error('Failed to update profile');
    } finally {
      setLoading(false); // Set loading state to false after the request finishes
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="block text-gray-600">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="block text-gray-600">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="block text-gray-600">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Profile Picture Input */}
        <div className="flex items-center space-x-4">
          <label className="block text-gray-600">Profile Picture</label>
          <label className="cursor-pointer flex items-center">
            <FaCamera className="text-gray-600 mr-2" /> {/* Icon */}
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Display selected image information */}
        {profilePic && (
          <p className="text-sm text-gray-600 mt-2">Selected Image: {profilePic.name}</p>
        )}

        <button
          type="submit"
          className={`w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex justify-center items-center ${
            loading ? 'cursor-not-allowed' : ''
          }`}
          disabled={loading} // Disable button when loading
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin mr-2" /> Saving...
            </>
          ) : (
            'Save Changes'
          )}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
