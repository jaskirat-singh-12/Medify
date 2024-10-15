import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('your-image-url.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 p-12 rounded-lg shadow-lg border border-gray-200 text-center max-w-4xl mx-4 md:mx-8">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6">Welcome to MedConnect</h1>
        <p className="text-lg text-gray-800 mb-10">
          At MedConnect, we are dedicated to making healthcare accessible and convenient for everyone. 
          Whether you need to consult with a specialist or book a comfortable bed for your stay, 
          our platform is designed to streamline the process and ensure you receive the best care 
          possible. Explore our services and take control of your healthcare journey today.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-lg mx-auto">
          {/* Button to consult a doctor */}
          <button
            onClick={() => navigate('/doctors')}
            className="bg-blue-600 text-white py-4 px-8 rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition duration-300"
          >
            Consult a Doctor
          </button>

          {/* Button to book a bed */}
          <button
            onClick={() => navigate('/beds')}
            className="bg-green-600 text-white py-4 px-8 rounded-lg shadow-md hover:bg-green-700 transform hover:scale-105 transition duration-300"
          >
            Book a Bed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
