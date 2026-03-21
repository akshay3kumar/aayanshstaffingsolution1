import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-gray-100 to-gray-200 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button - Left Side */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-black hover:text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-white text-black shadow-md'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Contact Info - Center/Right Side */}
          <div className="md:hidden flex flex-col space-y-1">
            <a
              href="tel:+918862992830"
              className="flex items-center text-gray-700 hover:text-black transition-colors text-sm"
            >
              <span className="mr-2">📞</span>
              <span className="font-semibold">+91 88629 92830</span>
            </a>
            <a
              href="mailto:aayanshstaffings@gmail.com"
              className="flex items-center text-gray-700 hover:text-black transition-colors text-xs"
            >
              <span className="mr-2">📧</span>
              <span className="font-medium">aayanshstaffings@gmail.com</span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+918862992830"
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200 font-semibold shadow-md"
            >
              📞 Call Us
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-300">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-white text-black shadow-md'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+918862992830"
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200 font-semibold text-center"
              >
                📞 Call Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

