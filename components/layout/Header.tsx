import React from "react";
import { Search } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="w-full shadow-sm bg-white">
      {/* Top Section */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          StayFinder
        </div>

        {/* Search Bar */}
        <div className="flex items-center border rounded-full px-4 py-2 w-1/3">
          <Search className="w-5 h-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search destinations..."
            className="flex-1 outline-none text-sm"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          <button className="text-gray-700 font-medium hover:text-blue-600">
            Sign In
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>

     
    </header>
  );
};

export default Header;
