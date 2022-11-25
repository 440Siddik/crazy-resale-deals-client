import React from 'react';
import banner from '../../../assets/images/banner.webp'
const Banner = () => {
  return (
    <div>
      <h2 className='text-4xl text-center font-medium my-3'>Grab The Deal Now !!!</h2>
      <div>
        <img className='mx-auto' src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;