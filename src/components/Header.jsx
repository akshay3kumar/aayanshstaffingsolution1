import React from 'react';
import logo from '../assets/comp_logo_no_backg.png';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Aayansh Staffing Solutions Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-cover"
            />
            <div>
              <div className="text-xl md:text-3xl font-bold">
                <span className="text-accent">AAYANSH</span> STAFFING SOLUTIONS
              </div>
              <p className="text-xs md:text-sm text-blue-100 mt-1">
                Reliable Manpower. Scalable Solutions.
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="text-right">
              <p className="text-sm font-semibold">📞 +91 88629 92830</p>
              <p className="text-xs text-blue-100">aayanshstaffings@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
