import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {

  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

  return dashData && (
    <div className='p-6 bg-gray-100 min-h-screen'>
      
      {/* Statistics Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
        <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
          <p className='text-3xl font-bold text-blue-600'>{dashData.doctors}</p>
          <p className='text-gray-500'>Doctors</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
          <p className='text-3xl font-bold text-green-600'>{dashData.appointments}</p>
          <p className='text-gray-500'>Appointments</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
          <p className='text-3xl font-bold text-red-600'>{dashData.patients}</p>
          <p className='text-gray-500'>Patients</p>
        </div>
      </div>

      {/* Latest Bookings Section */}
      <div className='bg-white rounded-lg shadow-md border border-gray-200'>
        <div className='px-6 py-4 border-b'>
          <p className='text-xl font-semibold text-gray-800'>Latest Bookings</p>
        </div>
        <div className='divide-y divide-gray-200'>
          {dashData.latestAppointments.slice(0, 5).map((item, index) => (
            <div className='flex items-center px-6 py-4 hover:bg-gray-100' key={index}>
              <div className='flex-shrink-0'>
                <img className='w-12 h-12 rounded-full' src={item.docData.image} alt={item.docData.name} />
              </div>
              <div className='ml-4 flex-1'>
                <p className='text-lg font-medium text-gray-800'>{item.docData.name}</p>
                <p className='text-gray-600'>Booking on {slotDateFormat(item.slotDate)}</p>
              </div>
              <div className='flex-shrink-0'>
                {item.cancelled ? (
                  <p className='text-red-500 text-sm font-medium'>Cancelled</p>
                ) : item.isCompleted ? (
                  <p className='text-green-500 text-sm font-medium'>Completed</p>
                ) : (
                  <button onClick={() => cancelAppointment(item._id)} className='text-red-500 text-sm font-medium'>Cancel</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
