import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    position: '',
    resume: null
  });

  const [phoneError, setPhoneError] = useState('');

  const jobOpenings = [
    {
      title: 'Delivery Executive',
      location: 'All Locations',
      type: 'Full-time',
      icon: '🚴'
    },
    {
      title: 'Warehouse Associate',
      location: 'All Locations',
      type: 'Full-time',
      icon: '📦'
    },
    {
      title: 'Hub Staff',
      location: 'All Locations',
      type: 'Full-time',
      icon: '🏢'
    },
    {
      title: 'Operations Support',
      location: 'All Locations',
      type: 'Full-time',
      icon: '⚙️'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for phone number
    if (name === 'phone') {
      // Only allow digits
      const digitsOnly = value.replace(/\D/g, '');
      
      // Validate: show error if non-digits were entered
      if (value !== digitsOnly) {
        setPhoneError('Only digits are allowed');
      } else if (digitsOnly.length > 10) {
        setPhoneError('Maximum 10 digits allowed');
      } else {
        setPhoneError('');
      }
      
      setFormData({
        ...formData,
        [name]: digitsOnly.slice(0, 10) // Limit to 10 digits
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // EmailJS configuration
    // IMPORTANT: Replace these with your actual EmailJS credentials
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      city: formData.city,
      position: formData.position,
      to_email: 'aayanshstaffings@gmail.com',
      message: `New job application received:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCity: ${formData.city}\nPosition: ${formData.position}\n\nNote: Resume file was attached (file handling requires backend setup)`
    };

    try {
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      alert('Thank you for applying! We have received your application and will get back to you soon.');
      
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        city: '',
        position: '',
        resume: null
      });
      
      // Reset file input
      const fileInput = document.getElementById('resume');
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      console.error('Failed to send application:', error);
      alert('Sorry, there was an error submitting your application. Please try again or contact us directly at aayanshstaffings@gmail.com');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="text-white py-20" style={{ backgroundImage: 'linear-gradient(to right, #005563, #003d47)' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build your career with India's fastest-growing staffing solutions company
          </p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, white, #e0f2f5)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#005563' }}>
            Current Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className="text-4xl mb-4">{job.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#005563' }}>{job.title}</h3>
                <p className="text-gray-600 mb-1">📍 {job.location}</p>
                <p className="text-gray-600 mb-4">⏰ {job.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, #e0f2f5, white)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#005563' }}>Apply Now</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number * (10 digits)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 outline-none transition-all ${
                        phoneError
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:ring-primary focus:border-transparent'
                      }`}
                      placeholder="10 digit mobile number"
                    />
                    {phoneError && (
                      <p className="mt-1 text-sm text-red-600 font-medium">
                        {phoneError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select City</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Gurugram">Gurugram</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Noida">Noida</option>
                      <option value="Dehradun">Dehradun</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      Position Applying For *
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select Position</option>
                      <option value="Delivery Executive">Delivery Executive</option>
                      <option value="Warehouse Associate">Warehouse Associate</option>
                      <option value="Hub Staff">Hub Staff</option>
                      <option value="Operations Support">Operations Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                    Resume Upload *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-white file:cursor-pointer hover:file:opacity-90"
                    style={{
                      '--tw-file-button-bg': '#005563'
                    }}
                  />
                  <p className="text-sm text-gray-500 mt-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-colors duration-200 shadow-lg text-lg"
                  style={{ backgroundColor: '#005563' }}
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, white, #e0f2f5)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#005563' }}>
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#005563' }}>Career Growth</h3>
              <p className="text-gray-600">
                Opportunities to grow and advance in India's booming logistics sector
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#005563' }}>Top Brands</h3>
              <p className="text-gray-600">
                Work with leading companies like IKEA, BigBasket, Flipkart, and Amazon
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#005563' }}>Fast Onboarding</h3>
              <p className="text-gray-600">
                Quick and smooth onboarding process to get you started immediately
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

