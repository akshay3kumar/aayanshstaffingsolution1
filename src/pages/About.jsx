import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100">
            Learn more about our mission and values
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are dedicated to creating innovative solutions that empower businesses and 
                individuals to achieve their goals. Our team of passionate professionals works 
                tirelessly to deliver exceptional products and services that make a real difference.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading provider of cutting-edge technology solutions, recognized for 
                our commitment to excellence, innovation, and customer satisfaction. We envision 
                a future where technology seamlessly enhances every aspect of life.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">✨</div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Innovation</h3>
                    <p className="text-gray-600">
                      Constantly pushing boundaries and exploring new possibilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Integrity</h3>
                    <p className="text-gray-600">
                      Building trust through transparency and ethical practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Excellence</h3>
                    <p className="text-gray-600">
                      Delivering the highest quality in everything we do.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💡</div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Collaboration</h3>
                    <p className="text-gray-600">
                      Working together to achieve extraordinary results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Team Member {member}</h3>
                <p className="text-gray-600">Position Title</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


