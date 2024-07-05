import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Simple Blog
        </Link>
        <div className="flex items-center">
          <Link
            to="/new"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-4 transition duration-300 ease-in-out"
          >
            New Post
          </Link>
          <Link
            to="/"
            className="hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
