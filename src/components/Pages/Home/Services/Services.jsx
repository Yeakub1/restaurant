import React from 'react';
import Service from '../../../Shared/Services/Service';
import './Services.css'

const Services = () => {
    return (
      <div className="services max-w-7xl mx-auto">
        <Service
          heading={"Bistro Boss"}
          subHeding={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
          }
        ></Service>
      </div>
    );
};

export default Services;