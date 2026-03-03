import React from 'react';
import logo from '../assets/comp_logo_no_backg.png';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Logo"
              className="w-24 h-24 object-cover"
            />
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-yellow-300">AAYANSH STAFFING SOLUTIONS</span> 
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-sm text-blue-100">Your Trusted Staffing Partner</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
