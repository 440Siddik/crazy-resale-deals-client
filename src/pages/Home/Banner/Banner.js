import React from 'react';
import banner from '../../../assets/images/banner.webp'
const Banner = () => {
  return (
    <div>
      <h2 className="text-4xl text-center text-blue-400 font-medium my-4">
        Grab The Deal Now !!!
      </h2>
      <div className='m-10'>
        <img className="mx-auto w-full" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;