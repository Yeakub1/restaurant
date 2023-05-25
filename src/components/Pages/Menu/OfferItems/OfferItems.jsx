import React, { useEffect, useState } from 'react';
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';
import Items from '../../../Shared/Items/Items';

const OfferItems = () => {
       const [menu, setMenu] = useState([]);
       useEffect(() => {
         fetch("menu.json")
           .then((res) => res.json())
           .then((data) => {
             const popularItems = data.filter(
               (item) => item.category === "offered"
             );
             setMenu(popularItems);
           });
       }, []);
    return (
      <section className="mb-10">
        <SectionHeading
          subHeding={"---Dont miss---"}
          heading={"TODAYS OFFER"}
        ></SectionHeading>
        <div className="grid grid-cols-2 max-w-7xl mx-auto gap-10">
          {menu.map((item) => (
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