"use client";
import React, { useState } from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import { FiMenu } from "react-icons/fi"; // Replace 'FiMenu' with the appropriate hamburger icon from 'react-icons'

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full">
      {/* Desktop Navigation Bar */}
      <div className="hidden md:flex w-11/12 mx-auto border-b border-white border-opacity-70 h-24 text-[#1BA098] font-sans justify-between items-center">
        <div className="flex gap-20 mx-auto">
          <button className="transform hover:translate-y-[-2px] transition">
            Home
          </button>
          <button className="transform hover:translate-y-[-2px] transition">
            Projects
          </button>
          <button className="transform hover:translate-y-[-2px] transition">
            About
          </button>
          <button className="transform hover:translate-y-[-2px] transition">
            Blog
          </button>
          <button className="flex gap-0 my-auto border border-[#1BA098] border-opacity-75 hover:bg-[#1BA098] hover:text-white pr-2 pb-1 rounded-lg transform hover:translate-y-[-2px] transition">
            <span className="mt-1 pl-2">Resume</span>
            {/* Use the resume icon from react-icons */}
            <LiaDownloadSolid className="mt-1.5" size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Bar (Hamburger Menu) */}
      <div className="md:hidden">
        <div className="flex w-11/12 mx-auto border-b border-white border-opacity-70 h-24 text-[#1BA098] font-sans justify-between items-center">
          <div>
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              {/* Use the hamburger icon from react-icons */}
              <FiMenu className="text-[#1BA098] text-2xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div>
            <button className="w-full text-white opacity-80 text-center transform hover:translate-y-[-2px] transition py-2 px-4">
              Home
            </button>
            <button className="w-full text-white opacity-80 text-center transform hover:translate-y-[-2px] transition py-2 px-4">
              Projects
            </button>
            <button className="w-full text-white opacity-80 text-center transform hover:translate-y-[-2px] transition py-2 px-4">
              About
            </button>
            <button className="w-full text-white opacity-80 text-center transform hover:translate-y-[-2px] transition py-2 px-4">
              Blog
            </button>
            <button className="w-full flex gap-0 m-auto justify-center text-white borde pr-2 pb-1 rounded-lg transform hover:translate-y-[-2px] transition py-2 px-4">
              <span className="mt-1 pl-2">Resume</span>
              {/* Use the resume icon from react-icons */}
              <LiaDownloadSolid className="mt-1.5" size={22} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
