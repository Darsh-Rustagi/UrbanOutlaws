// components/Navbar.tsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#131313] px-8 py-3 text-white">
      <div className="flex items-center space-x-6">
          <a href="/">
        <img
          src="/images/logo.png"
          alt="APEX Legends logo in white text"
          className="h-16"
        />
          </a>
        <ul className="flex items-center space-x-6 text-sm font-medium">
          <a href="/about" className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
            <span>About</span>

          </a>
          <a href="/season" className="cursor-pointer hover:text-gray-300">Season</a>
          
        </ul>
      </div>
      <button className="bg-[#FF0000] text-white font-medium text-sm px-4 py-2 rounded-md hover:bg-red-600 transition">
          <a href="/download">Download <i className="fas fa-chevron-right ml-1 text-xs"></i></a>
      </button>
    </nav>
  );
};

export default Navbar;
