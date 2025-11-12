"use client";
import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white">
      <div className="flex justify-between items-center px-4 sm:px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          StayFinder
        </div>

        {/* Search Bar (hidden on small screens) */}
        <div className="hidden md:flex items-center border rounded-full px-4 py-2 w-1/3">
          <Search className="w-5 h-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search destinations..."
            className="flex-1 outline-none text-sm"
          />
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="text-gray-700 font-medium hover:text-blue-600">
            Sign In
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start gap-3 px-4 pb-4 border-t">
          {/* Mobile Search */}
          <div className="flex items-center border rounded-full px-3 py-2 w-full">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search destinations..."
              className="flex-1 outline-none text-sm"
            />
          </div>

          {/* Mobile Auth Buttons */}
          <button className="text-gray-700 font-medium hover:text-blue-600 w-full text-left">
            Sign In
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
