import React from 'react';

const Service = ({ heading, subHeding,img }) => {
  return (
      <div
        className="hero h-[60vh]"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="hero-content text-center text-neutral-content bg-black opacity-70 lg:w-8/12 p-10 rounded-md ">
          <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{ heading}</h1>
            <p className="mb-5">
             {subHeding}
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default Service;