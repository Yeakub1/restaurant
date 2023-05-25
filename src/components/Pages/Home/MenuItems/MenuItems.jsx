import React, { useEffect, useState } from 'react';
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';
import Items from '../../../Shared/Items/Items';

const MenuItems = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(
                  (item) => item.category === "popular"
                );
                setMenu(popularItems)
            })
    }, []);

    return (
      <section className="max-w-7xl mx-auto mb-10">
        <section>
          <SectionHeading
            subHeding={"---Check it out---"}
            heading={"FROM OUR MENU"}
          ></SectionHeading>
        </section>
        <div className="grid lg:grid-cols-2 gap-5">
          {menu.map((item) => (
            <Items key={item._id} item={item}></Items>
          ))}
        </div>
      </section>
    );
};

export default MenuItems;