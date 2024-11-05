import React from "react";
import { Link } from "react-router-dom";

//  Navbar
const Navbar = () => {
  // Function to handle refresh
  const handleRefresh = () => {
    window.location.reload(); // Refresh the page
  };

  // Render
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span
          onClick={handleRefresh}
          className="text-2xl font-bold cursor-pointer"
        >
          Simple Blog
        </span>
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
