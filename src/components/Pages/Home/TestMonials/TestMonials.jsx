import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';
import { Rating } from '@smastrom/react-rating';
import "@smastrom/react-rating/style.css";


const TestMonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, []);
  
    return (
      <section className="max-w-7xl mx-auto mb-10">
        <SectionHeading
          subHeding={"---What Our Clients Say---"}
          heading={"TESTIMONIALS"}
        ></SectionHeading>
        <section>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="">
              {reviews.map((review) => (
                <SwiperSlide key={review._id}>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                    className="mx-auto mb-5"
                  />
                  <FaQuoteLeft className="mx-auto text-5xl mb-5" />
                  <p className="w-8/12 mx-auto text-lg">{review.details}</p>
                  <p className=" text-center text-3xl font-bold mt-5 text-yellow-600">
                    {review.name}
                  </p>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>
      </section>
    );
};

export default TestMonials;