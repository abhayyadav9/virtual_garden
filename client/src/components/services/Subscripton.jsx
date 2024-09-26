import React from 'react';
import { Link } from 'react-router-dom';

const Subscription = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 text-white">
      {/* Title with animation */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
        Join Our Community
      </h1>

      {/* Subheading with delay animation */}
      <p className="text-lg md:text-xl mb-6 text-center animate-fadeInSlow">
        Subscribe today to access exclusive content, resources, and more.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full md:w-auto transition-transform transform hover:scale-105">
         <Link to="/login"> Login</Link>
        </button>

        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-full md:w-auto transition-transform transform hover:scale-105">
         <Link to="/signup">Signup</Link>
        </button>
      </div>

      {/* Extra Resources section */}
      <p className="text-sm md:text-base text-center animate-fadeInDelay">
        Need more information? <a href="/resources" className="underline text-yellow-200 hover:text-yellow-300">Get extra resources here!</a>
      </p>
    </div>
  );
}

export default Subscription;
