import React from 'react';

const SectionHeading = ({heading, subHeding}) => {
    return (
      <div className="text-center mt-10 mb-10">
        <p className="text-2xl text-yellow-600">{subHeding}</p>
        <hr className="w-5/12 mx-auto border-4 rounded-xl mt-5 mb-5" />
        <h1 className="font-bold text-5xl uppercase">{heading}</h1>
      </div>
    );
};

export default SectionHeading;