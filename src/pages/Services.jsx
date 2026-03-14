import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Quick Commerce Staffing',
      icon: '⚡',
      items: [
        'Delivery Executives',
        'Hub Associates',
        'Dark Store Staff',
        'Shift-Based Workforce'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'E-commerce & Warehouse Staffing',
      icon: '📦',
      items: [
        'Pickers & Packers',
        'Inventory Handlers',
        'Sorting Staff',
        'Warehouse Associates'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Mass Hiring & Workforce Scaling',
      icon: '👥',
      items: [
        'Peak Season Hiring',
        'New Warehouse Launch Staffing',
        'Regional Expansion Support'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Compliance & Documentation',
      icon: '📋',
      items: [
        'Background Verification',
        'KYC Documentation',
        'Onboarding Support',
        'Workforce Tracking'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive staffing solutions tailored for India's fast-paced logistics and e-commerce sectors
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="text-5xl mb-3">{service.icon}</div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-3 mt-1">✓</span>
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Aayansh Staffing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Fast Deployment</h3>
              <p className="text-gray-600">
                Quick response and rapid workforce deployment to meet your urgent staffing needs
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Quality Screening</h3>
              <p className="text-gray-600">
                Rigorous candidate screening and verification process to ensure reliability
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Scalable Solutions</h3>
              <p className="text-gray-600">
                Flexible workforce solutions that scale with your business growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Workforce?</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Let's discuss your staffing requirements and create a customized solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-trtansparent border-2 text-accent px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 transition-colors duration-200 shadow-lg inline-block text-lg"
            >
              Get Staff Now
            </Link>
            <a
              href="tel:+918862992830"
              className="bg-trtansparent border-2 text-accent px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 transition-colors duration-200 shadow-lg inline-block text-lg"
            >
              Call Us: +91 88629 92830
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

