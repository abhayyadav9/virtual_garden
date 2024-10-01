import React from 'react';

const AllBook = () => {
  const books = [
    {
      title: 'The Power of Herbal Medicine',
      author: 'John Doe',
      description: 'A comprehensive guide to the healing properties of medicinal plants and herbs.',
      image: 'https://via.placeholder.com/300x400',
    },
    {
      title: 'Herbs for Wellness',
      author: 'Jane Smith',
      description: 'Explore the benefits of herbs in promoting overall health and well-being.',
      image: 'https://via.placeholder.com/300x400',
    },
    {
      title: 'Ayurvedic Healing',
      author: 'Rahul Gupta',
      description: 'Discover the ancient Ayurvedic practices of using medicinal plants for healing.',
      image: 'https://via.placeholder.com/300x400',
    },
    {
      title: 'Botanical Medicine',
      author: 'Sara Green',
      description: 'A modern approach to using plants and herbs for medicinal purposes.',
      image: 'https://via.placeholder.com/300x400',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-teal-600 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          All Medicinal Books
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <img
                src={book.image}
                alt={book.title}
                className="rounded-md w-full h-64 object-cover mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h2>
              <p className="text-gray-600 italic mb-4">by {book.author}</p>
              <p className="text-gray-700">{book.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBook;
