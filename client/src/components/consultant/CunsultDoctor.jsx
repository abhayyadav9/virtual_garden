import React from 'react';

const ConsultDoctor = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center transform transition hover:scale-105 hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Consult a Doctor
        </h1>
        <p className="text-gray-600 mb-6">
          Get instant medical advice and consultations with top doctors online. Our team of certified professionals is ready to assist you.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default ConsultDoctor;
