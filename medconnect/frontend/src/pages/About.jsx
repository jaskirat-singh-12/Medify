import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Header */}
      <div className="text-center text-3xl font-bold text-gray-800 mb-10">
        <p>About <span className="text-blue-600">Us</span></p>
      </div>

      {/* Introduction Section */}
      <div className="text-gray-700 space-y-6 text-base leading-relaxed mb-16">
        <p>
          Welcome to <span className="font-semibold">MedConnect</span>, your dedicated partner in managing your healthcare journey with ease and efficiency. At MedConnect, we believe that accessing healthcare should be simple, intuitive, and stress-free. Our platform was created with the vision of revolutionizing how people connect with healthcare providers, ensuring everyone receives the care they need, when they need it.
        </p>
        <p>
          Founded on the principles of innovation, inclusivity, and compassion, MedConnect strives to break down barriers between patients and healthcare professionals. We aim to empower individuals with the tools and resources necessary to make informed decisions about their health. Whether you are scheduling your first appointment or managing ongoing care, MedConnect is here to guide you every step of the way.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="space-y-8 mb-16">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-700">
            At MedConnect, our mission is to provide accessible, reliable, and comprehensive healthcare solutions that bridge the gap between patients and healthcare providers. We are committed to making healthcare more accessible, transparent, and affordable by leveraging technology and innovation. Our goal is to create a world where quality healthcare is within reach for everyone, regardless of location or circumstances.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
          <p className="text-gray-700">
            Our vision is to transform the healthcare experience for patients and providers alike. We envision a future where healthcare is seamless, personalized, and centered around the needs of the individual. Through continuous innovation, we aim to redefine the standards of patient care, ensuring a more connected and responsive healthcare ecosystem.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="space-y-8 mb-16">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Core Values</h3>
        <div className="text-gray-700">
          <p><strong>Innovation:</strong> We embrace change and are constantly exploring new ways to enhance our platform, ensuring that our users benefit from the latest advancements in healthcare technology.</p>
          <p><strong>Accessibility:</strong> We believe healthcare is a fundamental right, not a privilege. Our platform is designed to be accessible to everyone, regardless of their background, location, or tech-savviness.</p>
          <p><strong>Integrity:</strong> We prioritize transparency, honesty, and ethical practices in everything we do. Our users’ trust is our most valuable asset, and we are committed to maintaining the highest standards of professionalism.</p>
          <p><strong>Compassion:</strong> At the heart of MedConnect is a deep commitment to empathy and understanding. We strive to make our platform a comforting and supportive environment for all users.</p>
          <p><strong>Excellence:</strong> We are committed to delivering excellence in every aspect of our service, from user experience to customer support. We continuously seek to improve, innovate, and provide the best possible service to our users.</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center text-2xl font-bold text-gray-800 mb-10">
        <p>Why <span className="text-blue-600">Choose Us</span></p>
      </div>

      <div className="space-y-8 mb-20">
        <div className="text-gray-700">
          <h4 className="text-lg font-semibold mb-2">Efficiency</h4>
          <p>
            MedConnect offers a streamlined appointment scheduling process that fits seamlessly into your busy lifestyle. With just a few clicks, you can book an appointment with a trusted healthcare provider, eliminating the hassle of long wait times and complicated booking procedures.
          </p>
        </div>

        <div className="text-gray-700">
          <h4 className="text-lg font-semibold mb-2">Convenience</h4>
          <p>
            Our platform provides access to a vast network of healthcare professionals across various specialties. You can easily find and connect with doctors in your area, view their profiles, read reviews, and select the provider that best meets your needs.
          </p>
        </div>

        <div className="text-gray-700">
          <h4 className="text-lg font-semibold mb-2">Personalization</h4>
          <p>
            MedConnect tailors your healthcare experience by providing personalized recommendations, reminders, and insights based on your unique health profile. We are committed to helping you stay on top of your health by offering customized solutions that cater to your specific needs.
          </p>
        </div>

        <div className="text-gray-700">
          <h4 className="text-lg font-semibold mb-2">Comprehensive Support</h4>
          <p>
            Beyond appointment scheduling, MedConnect offers a comprehensive range of services, including access to digital health records, telemedicine consultations, and health management tools. Our platform is designed to be a one-stop solution for all your healthcare needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
