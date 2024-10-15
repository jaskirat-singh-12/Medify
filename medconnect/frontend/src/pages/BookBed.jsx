import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const BookBed = () => {
  const [bedType, setBedType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [availableBeds, setAvailableBeds] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!bedType || !startDate || !endDate) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      // Call the backend to search for available beds
      const { data } = await axios.post('/api/beds/search', {
        bedType,
        startDate,
        endDate
      });

      if (data.success) {
        setAvailableBeds(data.beds);
        toast.success("Beds found");
      } else {
        setAvailableBeds([]); // Reset if no beds found
        toast.error("No beds available for the selected dates");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error searching beds");
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Search Available Beds</h2>
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium">Select Bed Type</label>
          <select
            value={bedType}
            onChange={(e) => setBedType(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          >
            <option value="">Select</option>
            <option value="general">General</option>
            <option value="private">Private</option>
            <option value="ICU">ICU</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          Search
        </button>
      </form>

      {/* Display available beds */}
      {availableBeds.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold">Available Beds:</h3>
          <ul>
            {availableBeds.map((bed, index) => (
              <li key={index} className="mt-2">
                {bed.type} - Available from {bed.availableFrom} to {bed.availableTo}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookBed;
