import React from 'react';
import Service from '../../../Shared/Services/Service';
import img from "../../../../assets/home/chef-service.jpg";

const Services = () => {
    return (
      <div className="">
        <div className="">
          <Service
            heading={"Bistro Boss"}
            subHeding={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
            }
            img={img}
          ></Service>
        </div>
      </div>
    );
};

export default Services;