import React from 'react';
import FoodCard from '../../../Shared/FoodCard/FoodCard';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const OrderItems = ({ itme }) => {
    const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span className="' + className + '">' + (index + 1) + "</span>";
      },
    };

  return (
    <div className="">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-5">
            {itme.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderItems;