import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Transparent and ethical business practices in all our dealings'
    },
    {
      icon: '⚡',
      title: 'Speed',
      description: 'Fast response and rapid deployment to meet urgent staffing needs'
    },
    {
      icon: '✅',
      title: 'Reliability',
      description: 'Workforce you can depend on for consistent performance'
    },
    {
      icon: '📈',
      title: 'Growth',
      description: 'Growing together with our clients and candidates'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Building the future of scalable staffing solutions in India
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Aayansh Staffing Solutions was established in 2025 with a clear goal — to solve workforce 
                challenges in India's fast-paced logistics and e-commerce sectors.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We understand that delivery timelines are tight, demand fluctuates, and operational speed matters. 
                That's why we focus on rapid sourcing, strong candidate screening, and reliable manpower supply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-8 border-l-4 border-primary">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower businesses with dependable manpower solutions that enable seamless operations 
                and scalable growth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow-lg p-8 border-l-4 border-accent">
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become one of India's most trusted staffing partners for logistics-driven industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="py-16 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-black mb-2">100+</div>
              <p className="text-xl">Candidates Successfully Deployed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-black mb-2">7+</div>
              <p className="text-xl">Major Brand Partnerships</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-black mb-2">6+</div>
              <p className="text-xl">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Aayansh?</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Industry Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of logistics and e-commerce workforce requirements
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Quick Turnaround</h3>
              <p className="text-gray-600">
                Fast deployment model to meet your urgent staffing needs
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Trusted Partners</h3>
              <p className="text-gray-600">
                Working with India's leading brands and companies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Let's discuss how we can help build your workforce and scale your operations
          </p>
          <Link
            to="/contact"
            className="bg-trtansparent border-2 text-accent px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 transition-colors duration-200 shadow-lg inline-block text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

