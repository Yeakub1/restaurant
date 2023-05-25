import React from 'react';
import Service from '../../../Shared/Services/Service';
import img from '../../../../assets/shop/banner2.jpg'

const PageCover = () => {
    return (
        <div className='mb-20'>
            <Service
                heading={'OUR SHOP'}
                subHeding={'would like to try a dish?'}
                img={img}
            ></Service>
        </div>
    );
};

export default PageCover;