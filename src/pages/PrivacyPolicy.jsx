import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Introduction</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Aayansh Staffing Solutions ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Information We Collect</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We may collect information about you in a variety of ways, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>Personal Data: Name, email address, phone number, and other contact information</li>
                <li>Employment Information: Resume, work history, qualifications, and references</li>
                <li>Technical Data: IP address, browser type, device information, and usage data</li>
                <li>Communication Data: Records of correspondence and interactions with us</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>Process job applications and match candidates with suitable positions</li>
                <li>Communicate with you about our services and opportunities</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Information Sharing</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>Client companies for employment opportunities</li>
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Data Security</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Your Rights</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Cookies</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Contact Us</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> aayanshstaffings@gmail.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 88629 92830</p>
                <p className="text-gray-700"><strong>Address:</strong> 69/140 Mirjanhat Road, Bhagalpur, Bihar 812005</p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Changes to This Policy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

