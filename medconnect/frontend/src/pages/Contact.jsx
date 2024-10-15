import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      {/* Header */}
      <div className="text-center text-3xl font-bold text-gray-800 mb-8">
        <p>Contact <span className="text-blue-600">Us</span></p>
      </div>

      {/* Contact Information Section */}
      <div className="space-y-8 text-gray-700">
        {/* Office Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Office</h2>
          <p>
            We are located in the heart of Gurgaon, Haryana, offering a comfortable and modern facility designed to provide exceptional healthcare services. You can visit us or reach out through the following contact details:
          </p>
          <p className="mt-4">
            1234, Sector 45, <br />
            Gurgaon, Haryana, 122018, India
          </p>
          <p className="mt-2">
            Tel: +91 98765 43210 <br />
            Email: info@medconnect.com
          </p>
        </div>

        {/* Careers Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Careers at MedConnect</h2>
          <p>
            At MedConnect, we are committed to building a dynamic team of professionals passionate about delivering quality healthcare services. Whether you're just starting your career or looking to take the next step, MedConnect offers numerous opportunities for growth and development.
          </p>
          <p className="mt-4">
            Explore our current job openings and learn more about what it's like to work with us.
          </p>
          <button className="mt-6 border border-blue-600 px-6 py-3 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-all duration-300">
            Explore Jobs
          </button>
        </div>

        {/* Additional Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4">How to Reach Us</h2>
          <p>
            We are easily accessible by road and public transportation. Our office is just a 10-minute walk from the nearest metro station. For any inquiries, feedback, or support, feel free to reach out to us using the contact information provided above. We are here to assist you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
