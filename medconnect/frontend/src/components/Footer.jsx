import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            MedConnect is dedicated to improving healthcare accessibility and quality through innovative digital solutions. We aim to connect patients with the best healthcare providers, ensuring timely and efficient care. Our platform offers a range of services designed to streamline the healthcare experience for both patients and providers.
          </p>
          <p className='mt-5 text-gray-600'>
            MedConnect is committed to transforming the healthcare landscape by leveraging technology to create a more connected and efficient system. Our mission is to enhance the patient experience and support healthcare professionals with the tools they need to provide exceptional care.
          </p>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ MedConnect - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
