import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center border-b border-gray-300 py-2">
      <FaSearch className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search by author, title, or content..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-1 outline-none bg-transparent border-none focus:border-b focus:border-blue-500 text-sm text-gray-800"
      />
    </div>
  );
};

export default SearchBar;
