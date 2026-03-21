import React from 'react';
import indiaLocationMap from '../assets/customer_logo/INDIA_LOC.png';

const IndiaMapComponent = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Map Container */}
      <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg overflow-hidden">
        <img
          src={indiaLocationMap}
          alt="India Service Locations Map"
          className="w-full h-auto object-contain"
          onError={(e) => {
            console.error('Failed to load India location map');
            e.target.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
};

export default IndiaMapComponent;

// Made with Bob
