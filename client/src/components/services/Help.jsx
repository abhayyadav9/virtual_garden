import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const Help = () => {
  // Animation for the help text
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-100">
      <animated.div style={props}>
        <h1 className="text-3xl font-bold mb-4">How Can We Help You?</h1>
        <p className="text-lg mb-6 text-center">
          If you have any questions or need assistance, please feel free to reach out to us. We're here to help!
        </p>
        <p className="text-lg mb-4">
          Explore our resources below for more information:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>FAQs</li>
          <li>Contact Support</li>
          <li>User Guides</li>
          <li>Community Forum</li>
        </ul>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
         <Link to="/contact"> Contact Support</Link>
        </button>
      </animated.div>
    </div>
  );
};

export default Help;
