import React from "react";

function SearchBar({ setSearchTerm }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input 
      type="text"
      placeholder="Search expenses..."
      onChange={handleSearch}
      className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  );
}

export default SearchBar;
