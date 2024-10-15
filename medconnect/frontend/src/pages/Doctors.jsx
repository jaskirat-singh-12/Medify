import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  useEffect(() => {
    // Apply filtering based on speciality
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, speciality]);

  return (
    <div className="min-h-screen py-10 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Our Specialists</h2>
      <p className="text-center text-gray-600 mb-12">Find and book an appointment with the best doctors in your area.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filterDoc.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0); }}
          >
            <div className="relative">
              <img
                className="w-full h-72 object-cover"
                src={item.image}
                alt={item.name}
              />
              <div className={`absolute bottom-0 left-0 bg-gray-800 text-white text-xs font-semibold px-2 py-1 ${item.available ? 'bg-green-500' : 'bg-gray-500'}`}>
                {item.available ? 'Available' : 'Not Available'}
              </div>
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
