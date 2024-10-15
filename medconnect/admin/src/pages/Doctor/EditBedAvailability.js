import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditBedAvailability = () => {
  const [bedType, setBedType] = useState('general');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [availableBeds, setAvailableBeds] = useState([]);

  // Fetch initial bed availability
  useEffect(() => {
    const fetchBeds = async () => {
      try {
        const { data } = await axios.get('/api/beds/availability');
        setAvailableBeds(data.beds);
      } catch (error) {
        toast.error('Error fetching bed availability');
      }
    };

    fetchBeds();
  }, []);

  // Submit new availability
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!bedType || !startDate || !endDate) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const { data } = await axios.post('/api/beds/update', {
        bedType,
        startDate,
        endDate
      });

      if (data.success) {
        toast.success("Bed availability updated");
        // Update the state after successful update
        setAvailableBeds(data.updatedBeds);
      } else {
        toast.error("Failed to update bed availability");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating bed availability");
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Edit Bed Availability</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium">Select Bed Type</label>
          <select
            value={bedType}
            onChange={(e) => setBedType(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          >
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
          Update Availability
        </button>
      </form>

      {/* Display current bed availability */}
      {availableBeds.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold">Current Bed Availability:</h3>
          <ul>
            {availableBeds.map((bed, index) => (
              <li key={index} className="mt-2">
                {bed.type} - Available from {bed.startDate} to {bed.endDate}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EditBedAvailability;
