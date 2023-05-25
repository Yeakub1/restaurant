import React from 'react';
import Service from '../../../Shared/Services/Service';
import img from '../../../../assets/home/banner.jpg'

const PageCover = () => {
    return (
      <div className="">
        <div>
          <Service
            heading={"OUR MENU"}
            subHeding={"would you like to try a dist"}
            img={img}
          ></Service>
        </div>
      </div>
    );
};

export default PageCover;