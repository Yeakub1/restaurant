import React from 'react';
import Service from '../../../Shared/Services/Service';
import img from '../../../../assets/menu/salad-bg.jpg'

const Salad = () => {
    return (
      <div>
            <Service
                heading={'salad'}
          subHeding={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
                img={img}
        ></Service>
      </div>
    );
};

export default Salad;