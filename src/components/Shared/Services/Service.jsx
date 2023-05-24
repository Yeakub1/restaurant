import React from 'react';
import './Services.css'

const Service = ({ heading, subHeding }) => {
  return (
    <div className="max-w-7xl mx-auto mt-20 flex justify-center items-center  services">
      <div className="bg-black opacity-50 absolute text-white lg:w-8/12 text-center p-20 rounded-md">
        <h1 className="text-3xl mb-5">{heading}</h1>
        <p className="text-lg">
         {subHeding}
        </p>
      </div>
    </div>
  );
};

export default Service;