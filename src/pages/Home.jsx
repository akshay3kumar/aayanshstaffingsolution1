import React from 'react';
import backgroundImage from '../assets/home_back.jpeg';

const Home = () => {
  const brands = [
    'IKEA', 'BigBasket', 'Flipkart', 'Amazon', 'Swifter', 'Supertail', 'ElasticRun'
  ];

  const impactStats = [
    { number: '100+', label: 'Candidates Deployed' },
    { number: '7+', label: 'Major Brand Associations' },
    { number: '6+', label: 'Active Locations' },
    { number: '2025', label: 'Founded' }
  ];

  const locations = [
    'Delhi NCR', 'Gurugram', 'Delhi', 'Noida', 'Dehradun', 'Bihar', 'Uttar Pradesh'
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-[1]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Reliable Manpower. Scalable Solutions.
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-gray-100 drop-shadow-md font-semibold">
              Powering India's E-commerce, Quick Commerce & Logistics Industry with Fast, Scalable Workforce Deployment.
            </p>
            <p className="text-xl mb-8 text-gray-200 drop-shadow-md">
              Founded in 2025, Aayansh Staffing Solutions is a fast-growing manpower company supporting India's rapidly expanding delivery ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact"
                className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg text-center text-lg"
              >
                Hire Staff Now
              </a>
              <a 
                href="/careers"
                className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg text-center text-lg"
              >
                Apply for Jobs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Aayansh Staffing Solutions</h2>
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
      <section className="py-16 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-lg text-white">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-xl text-white font-semibold">Fast Deployment Model</p>
          </div>
        </div>
      </section>

      {/* Trusted By Leading Brands */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Trusted By Leading Brands</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="bg-gray-50 px-8 py-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200"
              >
                <span className="text-2xl font-bold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Quick Commerce Staffing</h3>
              <p className="text-gray-600 mb-4">
                Delivery executives, hub associates, and dark store staff
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 text-center">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">E-commerce & Warehouse</h3>
              <p className="text-gray-600 mb-4">
                Pickers, packers, inventory handlers, and warehouse associates
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Mass Hiring</h3>
              <p className="text-gray-600 mb-4">
                Peak season hiring and regional expansion support
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Compliance & Documentation</h3>
              <p className="text-gray-600 mb-4">
                Background verification, KYC, and onboarding support
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a 
              href="/services"
              className="bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg inline-block"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Locations We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Locations We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="font-semibold">📍 {location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Your Workforce</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Speak with our staffing experts today and discover how we can help scale your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-transparent border-2 border-white text-accent px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 transition-colors duration-200 shadow-lg inline-block"
            >
              Request Talent
            </a>
            <a 
              href="tel:+918862992830"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-accent transition-colors duration-200 inline-block"
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

