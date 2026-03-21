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
      <section className="text-white py-20" style={{ backgroundImage: 'linear-gradient(to right, #005563, #003d47)' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building the future of scalable staffing solutions in India
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, white, #e0f2f5)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Aayansh Staffing Solutions is committed to providing reliable and efficient manpower services to businesses across
                India.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We specialize in fulfilling workforce requirements by offering skilled and unskilled manpower along with complete
                payroll and compliance support.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our goal is to simplify hiring for organizations while ensuring all statutory requirements like PF and ESIC are
                handled smoothly.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We focus on building long-term relationships with our clients by delivering quality service and timely support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, #e0f2f5, white)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-lg p-8 border-l-4" style={{ borderColor: '#005563' }}>
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#005563' }}>Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide dependable staffing solutions that help businesses grow efficiently.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-lg p-8 border-l-4" style={{ borderColor: '#005563' }}>
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#005563' }}>Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become a trusted manpower partner for companies across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, white, #e0f2f5)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#005563' }}>Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#005563' }}>{value.title}</h3>
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
      <section className="py-16 text-white" style={{ backgroundImage: 'linear-gradient(to right, #005563, #003d47)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">100+</div>
              <p className="text-xl">Candidates Successfully Deployed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">7+</div>
              <p className="text-xl">Major Brand Partnerships</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">6+</div>
              <p className="text-xl">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, #e0f2f5, white)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#005563' }}>Why Choose Aayansh?</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#005563' }}>Industry Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of logistics and e-commerce workforce requirements
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#005563' }}>Quick Turnaround</h3>
              <p className="text-gray-600">
                Fast deployment model to meet your urgent staffing needs
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#005563' }}>Trusted Partners</h3>
              <p className="text-gray-600">
                Working with India's leading brands and companies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-white py-16" style={{ backgroundImage: 'linear-gradient(to right, #005563, #003d47)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Let's discuss how we can help build your workforce and scale your operations
          </p>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

