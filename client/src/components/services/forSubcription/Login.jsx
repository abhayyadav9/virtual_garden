import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '@/components/contexts/useContext';

const Login = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Redirect to admin dashboard if the user is already logged in
  // useEffect(() => {
  //   if (user) {
  //     navigate("/admin-dashboard");
  //   }
  // }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/user/login', {
        email,
        password
      }, { withCredentials: true });

      const { user } = response.data;

      toast.success(`Welcome back ${user.username}`);
      navigate("/admin-dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed. Try again.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Toaster />
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            Don't have an account? <Link to="/signup" className="text-blue-900 hover:text-blue-500">Sign Up</Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
