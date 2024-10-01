import React from 'react';

const LatestBook = () => {
  const herbs = [
    {
      name: 'Neem',
      benefits: 'Neem is known for its antibacterial, antifungal, and antiviral properties. It is used to treat infections, promote oral health, and support skin health.',
      image: 'https://via.placeholder.com/300x400',
    },
    {
      name: 'Tulsi',
      benefits: 'Tulsi, also known as Holy Basil, helps reduce stress, boost immunity, and has anti-inflammatory properties.',
      image: 'https://via.placeholder.com/300x400',
    },
    {
      name: 'Aloe Vera',
      benefits: 'Aloe Vera is known for soothing skin irritations, promoting digestion, and boosting hydration.',
      image: 'https://via.placeholder.com/300x400',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-green-600 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Medicinal Herbs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {herbs.map((herb, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
              <img
                src={herb.image}
                alt={`${herb.name} image`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{herb.name}</h2>
                <p className="text-gray-600 mb-2">Benefits:</p>
                <p className="text-gray-500">{herb.benefits}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBook;
