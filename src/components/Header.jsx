import React from 'react';
import logo from '../assets/comp_logo_no_backg.png';

const Header = () => {
  return (
    <header className="bg-gradient-to-r shadow-lg" style={{ backgroundImage: 'linear-gradient(to right, #014853ff, #028599ff)' }}>
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Aayansh Staffing Solutions Logo"
              className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover"
            />
            <div>
              {/* Mobile: 3 lines, Desktop: 1 line */}
              <div className="font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {/* Mobile view - 3 lines */}
                <div className="block md:hidden text-lg leading-tight">
                  <div>AAYANSH</div>
                  <div>STAFFING</div>
                  <div>SOLUTIONS</div>
                </div>
                {/* Desktop view - 1 line */}
                <div className="hidden md:block text-2xl lg:text-3xl">
                  <span>AAYANSH</span> <span>STAFFING SOLUTIONS</span>
                </div>
              </div>
              <p className="hidden md:block text-xs md:text-sm text-white mt-1">
                Reliable Manpower. Scalable Solutions.
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="text-right">
              <p className="text-sm font-semibold text-white">📞 +91 88629 92830</p>
              <p className="text-xs text-white">aayanshstaffings@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
