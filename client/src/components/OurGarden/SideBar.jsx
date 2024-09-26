import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="w-1/4 fixed bg-gray-200 p-4 h-screen">
      <h1 className="text-2xl font-bold mb-4">Garden Home</h1>
      <ul className="space-y-2">
        <li>
          <Link to="plantgallery" className="w-full text-left p-2 block bg-gray-300 hover:bg-gray-400">
            Plants Overview
          </Link>
        </li>
        <li>
          <Link to="3dparts" className="w-full text-left p-2 block bg-gray-300 hover:bg-gray-400">
            Plants part
          </Link>
        </li>
        <li>
          <Link to="/section3" className="w-full text-left p-2 block bg-gray-300 hover:bg-gray-400">
            Gardening Tips
          </Link>
        </li>
        <li>
          <Link to="/section4" className="w-full text-left p-2 block bg-gray-300 hover:bg-gray-400">
            Tools and Equipment
          </Link>
        </li>
        <li>
          <Link to="/section5" className="w-full text-left p-2 block bg-gray-300 hover:bg-gray-400">
            Contact Gardener
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
