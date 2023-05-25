import React from 'react';
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';
import Items from '../../../Shared/Items/Items';
import useMenu from '../../../../Hooks/useMenu';

const MenuItems = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

    return (
      <section className="max-w-7xl mx-auto mb-10">
        <section>
          <SectionHeading
            subHeding={"---Check it out---"}
            heading={"FROM OUR MENU"}
          ></SectionHeading>
        </section>
        <div className="grid lg:grid-cols-2 gap-5">
          {popular.map((item) => (
            <Items key={item._id} item={item}></Items>
          ))}
        </div>
      </section>
    );
};

export default MenuItems;