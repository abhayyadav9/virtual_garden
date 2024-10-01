import React from 'react';

const OurExpert = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Meet Our Experts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Expert 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Expert 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">Dr. Sarah Johnson</h2>
              <p className="text-gray-600 mb-4">Cardiologist</p>
              <p className="text-gray-500">
                With over 15 years of experience, Dr. Sarah is renowned for her expertise in cardiovascular health.
              </p>
            </div>
          </div>

          {/* Expert 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Expert 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">Dr. Michael Lee</h2>
              <p className="text-gray-600 mb-4">Neurologist</p>
              <p className="text-gray-500">
                Dr. Michael specializes in treating complex neurological disorders with advanced techniques.
              </p>
            </div>
          </div>

          {/* Expert 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Expert 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">Dr. Emily Carter</h2>
              <p className="text-gray-600 mb-4">Pediatrician</p>
              <p className="text-gray-500">
                A compassionate pediatrician, Dr. Emily has been caring for children for over a decade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpert;
