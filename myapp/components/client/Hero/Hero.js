'use client'
import React from 'react';

const Hero = () => {
  return (
    <section className="px-4 py-8 bg-gray-300  text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to Your Awesome Website
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Discover the beauty of our products and services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 1"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
            <img
              src="/image2.jpg"
              alt="Image 2"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
            <img
              src="/image3.jpg"
              alt="Image 3"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
