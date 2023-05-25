import React from 'react';
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';
import Items from '../../../Shared/Items/Items';
import useMenu from '../../../../Hooks/useMenu';

const OfferItems = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered")
    return (
      <section className="mb-10">
        <SectionHeading
          subHeding={"---Dont miss---"}
          heading={"TODAYS OFFER"}
        ></SectionHeading>
        <div className="grid grid-cols-2 max-w-7xl mx-auto gap-10">
          {offered.map((item) => (
            <Items key={item._id} item={item}></Items>
          ))}
        </div>
        <div className="text-center mt-10">
          <h1>ORDER YOUR FAVOURITE FOOD</h1>
          <hr className="w-2/12 mx-auto border-2 rounded-xl text-black" />
        </div>
      </section>
    );
};

export default OfferItems;