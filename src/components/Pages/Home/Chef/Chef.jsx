import React from 'react';
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';
import FoodCard from '../../../Shared/FoodCard/FoodCard';
import useMenu from '../../../../Hooks/useMenu';

const Chef = () => {
   const [menu] = useMenu();
   const offered = menu.filter((item) => item.category === "offered");

    return (
      <section className="max-w-7xl mx-auto mb-10">
        <SectionHeading
          subHeding={"---Should Try---"}
          heading={"CHEF RECOMMENDS"}
        ></SectionHeading>
        <section>
          <div className="grid lg:grid-cols-4 gap-6 ">
            {offered.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </section>
      </section>
    );
};

export default Chef;