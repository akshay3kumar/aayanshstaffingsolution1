import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [phoneError, setPhoneError] = useState('');

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
      }  else {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // EmailJS configuration
    // IMPORTANT: Replace these with your actual EmailJS credentials
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: 'aayanshstaffings@gmail.com'
    };

    try {
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      alert('Thank you for your message! We have received your inquiry and will get back to you soon.');
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly at aayanshstaffings@gmail.com or call +91 88629 92830');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="text-white py-20" style={{ backgroundImage: 'linear-gradient(to right, #005563, #003d47)' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's Build Your Workforce Together
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, white, #e0f2f5)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#005563' }}>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
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
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-colors duration-200 shadow-lg text-lg"
                  style={{ backgroundColor: '#005563' }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-6 border border-gray-200">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#005563' }}>Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl" style={{ color: '#005563' }}>📍</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2" style={{ color: '#005563' }}>Address</h3>
                      <p className="text-gray-600 text-lg">
                        69/140 Mirjanhat Road<br />
                        Bhagalpur, Bihar 812005<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-3xl" style={{ color: '#005563' }}>📧</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2" style={{ color: '#005563' }}>Email</h3>
                      <a
                        href="mailto:aayanshstaffings@gmail.com"
                        className="text-lg hover:opacity-80"
                        style={{ color: '#005563' }}
                      >
                        aayanshstaffings@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-3xl" style={{ color: '#005563' }}>📞</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2" style={{ color: '#005563' }}>Phone</h3>
                      <a
                        href="tel:+918862992830"
                        className="text-lg hover:opacity-80"
                        style={{ color: '#005563' }}
                      >
                        +91 88629 92830
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-3xl" style={{ color: '#005563' }}>🕐</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2" style={{ color: '#005563' }}>Business Hours</h3>
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="rounded-lg shadow-lg p-8 text-white" style={{ backgroundImage: 'linear-gradient(to right, #005563, #003d47)' }}>
                <h3 className="text-2xl font-bold mb-4">Speak With Our Staffing Experts Today</h3>
                <p className="mb-6 text-gray-300">
                  Get immediate assistance for your workforce requirements
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+918862992830"
                    className="block w-full border-2 border-white text-white py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 text-center"
                  >
                    📞 Call Now
                  </a>
                  <a
                    href="https://wa.me/918862992830"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border-2 border-white text-white py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 text-center"
                  >
                    💬 WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, #e0f2f5, white)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#005563' }}>Our Service Locations</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['Delhi NCR', 'Gurugram', 'Delhi', 'Noida', 'Dehradun', 'Bihar', 'Uttar Pradesh'].map((location, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-white"
                style={{ backgroundColor: '#005563' }}
              >
                <span className="font-semibold">📍 {location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

