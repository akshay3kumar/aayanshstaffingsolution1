import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-300">
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Agreement to Terms</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                By accessing or using the services of Aayansh Staffing Solutions, you agree to be bound 
                by these Terms and Conditions. If you disagree with any part of these terms, you may not 
                access our services.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Services</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Aayansh Staffing Solutions provides staffing and recruitment services for logistics, 
                e-commerce, and quick commerce sectors. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>Temporary and permanent staffing solutions</li>
                <li>Workforce deployment and management</li>
                <li>Candidate screening and verification</li>
                <li>Compliance and documentation support</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">User Responsibilities</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                When using our services, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Not misuse or abuse our services</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Client Obligations</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Clients engaging our staffing services agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>Provide accurate job descriptions and requirements</li>
                <li>Comply with employment laws and regulations</li>
                <li>Pay agreed fees in a timely manner</li>
                <li>Provide a safe working environment for deployed staff</li>
                <li>Not directly hire candidates without proper agreement</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Candidate Obligations</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Job seekers using our services agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>Provide truthful and accurate information</li>
                <li>Submit genuine documents and credentials</li>
                <li>Attend scheduled interviews and assessments</li>
                <li>Maintain professional conduct</li>
                <li>Honor employment commitments</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Fees and Payment</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Service fees are determined based on the scope of services provided. Payment terms will 
                be outlined in individual service agreements. Late payments may incur additional charges.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Limitation of Liability</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Aayansh Staffing Solutions shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages resulting from your use of our services. Our liability 
                is limited to the amount paid for our services.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Intellectual Property</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                All content, trademarks, and intellectual property on our website and materials are owned 
                by Aayansh Staffing Solutions. You may not use, reproduce, or distribute our content 
                without prior written permission.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Termination</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We reserve the right to terminate or suspend access to our services immediately, without 
                prior notice, for any breach of these Terms and Conditions.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Governing Law</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes shall be subject to the exclusive jurisdiction of the courts in Bihar, India.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Changes to Terms</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on our website. Your continued use of our services constitutes 
                acceptance of the modified terms.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-800 mt-8">Contact Information</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                For questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> aayanshstaffings@gmail.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 88629 92830</p>
                <p className="text-gray-700"><strong>Address:</strong> 69/140 Mirjanhat Road, Bhagalpur, Bihar 812005</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;

