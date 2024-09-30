import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [published, setPublished] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);

  // Fetch user details
  const fetchUserDetails = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/user/view-details', {
        withCredentials: true,
      });
      setUser(res.data.user);
    } catch (err) {
      console.error('Failed to fetch user details', err);
    }
  };

 // Fetch published data
const fetchPublished = async () => {
  try {
    const res = await axios.get('http://localhost:8000/api/v2/publish/view-publish', {
      withCredentials: true,
    });
    setPublished(res.data.publishes); // This sets the published items including their IDs
  } catch (err) {
    console.error('Failed to fetch published data', err);
  }
};
  // Initial fetching of user and published data
  useEffect(() => {
    const fetchData = async () => {
      setLoadingUser(true);
      await fetchUserDetails();
      await fetchPublished();
      setLoadingUser(false);
    };
    fetchData();
  }, []);

  // Function to update the user state
  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  // Function to update the published state
  const updatePublished = (updatedPublish) => {
    setPublished(updatedPublish);
  };

  return (
    <UserContext.Provider value={{ user, published, updateUser, updatePublished }}>
      {loadingUser ? (
        <div>Loading...</div>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};
