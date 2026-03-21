import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/home_back.jpeg';
import ikeaLogo from '../assets/customer_logo/IKEA.jpeg';
import bigbasketLogo from '../assets/customer_logo/BIGBASKET.png';
import flipkartLogo from '../assets/customer_logo/FLIPKART.png';
import amazonLogo from '../assets/customer_logo/AMAZON.jpeg';
import supertailsLogo from '../assets/customer_logo/SUPERTAILS.PNG';
import elasticrunLogo from '../assets/customer_logo/ELASTICRUN.PNG';
import IndiaMap from '../components/IndiaMap';

const Home = () => {
  const brands = [
    { name: 'IKEA', logo: ikeaLogo },
    { name: 'BigBasket', logo: bigbasketLogo },
    { name: 'Flipkart', logo: flipkartLogo },
    { name: 'Amazon', logo: amazonLogo },
    { name: 'Supertails', logo: supertailsLogo },
    { name: 'ElasticRun', logo: elasticrunLogo }
  ];

  const impactStats = [
    { number: '100+', label: 'Candidates Deployed' },
    { number: '7+', label: 'Major Brand Associations' },
    { number: '6+', label: 'Active Locations' },
    { number: '2025', label: 'Founded' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden min-h-[600px]">
        {/* Background Image */}
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          onError={(e) => {
            console.error('Image failed to load:', e);
            e.target.style.display = 'none';
          }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 z-[1]" style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 85, 99, 0.8), rgba(0, 85, 99, 0.6))' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Reliable Staffing Solutions Across India.
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-gray-100 drop-shadow-md font-semibold">
              We help businesseshire skilled and unskilled workforce quickly with complete payroll and Compliance support.
            </p>
            <p className="text-xl mb-8 text-gray-200 drop-shadow-md">
              Founded in 2025, Aayansh Staffing Solutions is a fast-growing manpower company supporting India's rapidly expanding delivery ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 inline-block"
                
              >
                Hire Staff Now
              </Link>
              <Link
                to="/careers"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 inline-block"
              >
                Apply for Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, white, #e0f2f5)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#005563' }}>About Us</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              We specialize in high-volume recruitment, quick onboarding, and dependable workforce deployment 
              for leading logistics and e-commerce brands.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With <strong>100+ candidates successfully deployed</strong> across multiple cities, we are building 
              the future of scalable staffing.
            </p>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, #005563, #003d47)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-xl text-white font-semibold">Fast Deployment Model</p>
          </div>
        </div>
      </section>

      {/* Trusted By Leading Brands */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, #e0f2f5, white)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#005563' }}>Trusted By Leading Brands</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="h-20 w-auto flex items-center justify-center overflow-visible"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-110"
                  style={{
                    transform: brand.name === 'ElasticRun' || brand.name === 'Supertails' ? 'scale(2.5)' : 'scale(1)'
                  }}
                  onError={(e) => {
                    console.error(`Failed to load ${brand.name} logo`);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, white, #e0f2f5)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#005563' }}>
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 text-center border border-gray-200">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Quick Commerce Staffing</h3>
              <p className="text-gray-600 mb-4">
                Delivery executives, hub associates, and dark store staff
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 text-center border border-gray-200">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">E-commerce & Warehouse</h3>
              <p className="text-gray-600 mb-4">
                Pickers, packers, inventory handlers, and warehouse associates
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 text-center border border-gray-200">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Mass Hiring</h3>
              <p className="text-gray-600 mb-4">
                Peak season hiring and regional expansion support
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 text-center border border-gray-200">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Compliance & Documentation</h3>
              <p className="text-gray-600 mb-4">
                Background verification, KYC, and onboarding support
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors duration-200 shadow-lg inline-block"
              style={{ backgroundColor: '#005563' }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Locations We Serve */}
      <section className="py-20" style={{ backgroundImage: 'linear-gradient(to right, #e0f2f5, white)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#005563' }}>Locations We Serve</h2>
          <div className="mb-12">
            <IndiaMap />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-white py-16" style={{ backgroundImage: 'linear-gradient(to right, #005563, #003d47)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Your Workforce</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Speak with our staffing experts today and discover how we can help scale your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 inline-block"
            >
              Request Talent
            </Link>
            <a
              href="tel:+918862992830"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 inline-block"
            >
              Call: +91 88629 92830
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

