import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-white p-10 text-black min-h-screen flex flex-col items-center justify-center py-12">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Welcome to Space Power Developer Community
      </h1>
      <p className="text-lg text-gray-400 mb-10 text-center">
        Join us in revolutionizing technology!
      </p>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <img
            src="Images/Second Logo (1) (1).png" // Replace with your image URL
            alt="Company Image"
            className="w-64 h-64 object-cover rounded-full shadow-lg mb-6"
          />
          <h2 className="text-3xl font-semibold mb-4">Powerful Software Development</h2>
          <p className="text-gray-400 text-center mb-6">
            We craft powerful software solutions that drive innovation and transform industries. 
            Our expertise lies in leveraging cutting-edge technologies to build robust and 
            scalable applications tailored to meet the evolving needs of businesses.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
          <p className="text-gray-400 text-center mb-6">
            Be part of our community to innovate and create the future.
          </p>
          <NavLink to="/Opportunities">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
            Explore Opportunities
          </button>
          </NavLink>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg">
          To empower developers and create groundbreaking technology for a better world.
        </p>
      </div>
    </div>
  );
}

export default Home;
