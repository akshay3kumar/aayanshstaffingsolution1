import React from 'react';
import Logo from '../components/Logo';
import heroImage from '../assets/company_logo.svg';
import backgroundImage from '../assets/home_back.jpeg';

const Home = () => {
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
          onLoad={() => console.log('Background image loaded successfully')}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-[1]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                Strategic talent solutions for ambitious organizations.
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-md">
                Connecting Talent with Opportunity
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg">
                Get Started
              </button>
            </div>
            {/* <div className="flex-1 flex justify-center">
              <img
                src={heroImage}
                alt="Hero"
                className="rounded-lg shadow-2xl  object-cover border-4 border-white"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Precision Talent Matching</h3>
              <p className="text-gray-600">
                We don’t just fill roles — we fit futures.
                Using deep screening, industry insight, and skill alignment, we connect you with candidates who truly match your business needs and culture.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Fast & Flexible Hiring Solutions</h3>
              <p className="text-gray-600">
                Whether temporary, contract, or permanent placements, we scale with your business and deliver qualified candidates quickly and efficiently.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">End-to-End Workforce Support</h3>
              <p className="text-gray-600">
                We manage recruitment, vetting, compliance, and placement so you can focus on growing your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied users today
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

