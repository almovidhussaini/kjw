import React, { useState } from "react";
import logo from '../../assets/icons/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#1F7723] p-7">
    <nav className="bg-[#209326] px-6 py-4 flex items-center justify-between w-[90%] mx-auto pt-2">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-10"
        />
      </div>

      {/* Middle Section: Menu Items (Desktop) */}
      <ul className="hidden md:flex space-x-8 text-black font-medium mt-1">
        <li className="hover:text-gray-700 cursor-pointer">About Us</li>
        <li className="hover:text-gray-700 cursor-pointer">Tokenomics</li>
        <li className="hover:text-gray-700 cursor-pointer">Roadmap</li>
        <li className="hover:text-gray-700 cursor-pointer">How To Buy</li>
      </ul>

      {/* Right Section: Connect Wallet Button */}
       
        <div>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded  hidden md:block">
            CONNECT WALLET
          </button>
        </div>
      

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center ">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-1/2 transform -translate-x-1/2 bg-dark-green px-6 py-4 space-y-4 text-black font-medium w-80 bg-green-700`}
      >
        <ul>
          <li className="hover:text-gray-700 cursor-pointer">About Us</li>
          <li className="hover:text-gray-700 cursor-pointer">Tokenomics</li>
          <li className="hover:text-gray-700 cursor-pointer">Roadmap</li>
          <li className="hover:text-gray-700 cursor-pointer">How To Buy</li>
        </ul>
        <div>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded">
            CONNECT WALLET
          </button>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
