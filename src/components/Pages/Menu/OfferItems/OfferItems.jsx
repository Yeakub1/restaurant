import React from 'react';
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';
import Items from '../../../Shared/Items/Items';
import useMenu from '../../../../Hooks/useMenu';
import { Link } from 'react-router-dom';

const OfferItems = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered")
    return (
      <section className="mb-10">
        <SectionHeading
          subHeding={"---Dont miss---"}
          heading={"TODAYS OFFER"}
        ></SectionHeading>
        <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-10">
          {offered.map((item) => (
            <Items key={item._id} item={item}></Items>
          ))}
        </div>
        <div className="text-center">
          <Link to="/shop">
            <button className="mt-10 btn btn-outline border-0 border-b-4 ">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </Link>
        </div>
      </section>
    );
};

export default OfferItems;