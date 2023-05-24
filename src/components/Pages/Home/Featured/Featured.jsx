import React from 'react';
import img from '../../../../assets/home/featured.jpg'
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';
import './Featured.css';

const Featured = () => {
    return (
      <section className="max-w-7xl mx-auto mb-10 text-white featured">
        <SectionHeading
          subHeding={"---Check it out---"}
          heading={"FROM OUR MENU"}
        ></SectionHeading>
        <div className="md:flex justify-center items-center gap-10 px-12 p-10">
          <div className="">
            <img src={img} alt="" />
          </div>
          <div className="">
            <h1 className="text-lg">March 20, 2023</h1>
            <p className="text-lg uppercase mt-3 mb-4">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, dignissimos architecto quam facilis sequi eos
              laudantium consequatur voluptas odit praesentium quas ducimus
              earum eaque quo! Ea nisi delectus, quod eos omnis, quas ut sunt
              perferendis consequatur dignissimos et molestias perspiciatis ex
              recusandae aliquam excepturi praesentium, nostrum harum sit
              dolores neque?
            </p>
            <button class="btn btn-active btn-primary mt-4">Read More</button>
          </div>
        </div>
      </section>
    );
};

export default Featured;