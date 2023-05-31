import React from 'react';
import Service from '../../../Shared/Services/Service';
import img from '../../../../assets/contact/banner.jpg'

const PageCover = () => {
    return (
      <div>
        <Service
          heading={"CONTACT US"}
          subHeding={"would you like to try a dist"}
          img={img}
        ></Service>
      </div>
    );
};

export default PageCover;