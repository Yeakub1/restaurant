import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import slide1 from "../../../../assets/home/slide1.jpg";
import slide2 from "../../../../assets/home/slide2.jpg";
import slide3 from "../../../../assets/home/slide3.jpg";
import slide4 from "../../../../assets/home/slide4.jpg";
import slide5 from "../../../../assets/home/slide5.jpg";
import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";

const Cetagory = () => {
  return (
    <div className="max-w-7xl mx-auto mb-10">
      <SectionHeading
        subHeding={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionHeading>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h1 className="uppercase text-3xl text-center -mt-14 text-white ">salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h1 className="uppercase text-3xl text-center -mt-14 text-white">Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className="uppercase text-3xl text-center -mt-14 text-white">pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className="uppercase text-3xl text-center -mt-14 text-white">desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h1 className="uppercase text-3xl text-center -mt-14 text-white">salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h1 className="uppercase text-3xl text-center -mt-14 text-white">Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h1 className="uppercase text-3xl text-center -mt-14 text-white">pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className="uppercase text-3xl text-center -mt-14 text-white">desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className="uppercase text-3xl text-center -mt-14 text-white">salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h1 className="uppercase text-3xl text-center -mt-14 text-white">Soups</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Cetagory;
