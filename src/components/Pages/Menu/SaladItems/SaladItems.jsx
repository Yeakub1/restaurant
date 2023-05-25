import React, { useEffect, useState } from 'react';
import Items from '../../../Shared/Items/Items';

const SaladItems = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
      fetch("menu.json")
        .then((res) => res.json())
        .then((data) => {
          const pizzaItem = data.filter((item) => item.category === "salad");
          setMenu(pizzaItem);
        });
    }, []);
    return (
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 mt-16 mb-20">
        {menu.map((item) => (
          <Items key={item._id} item={item}></Items>
        ))}
      </div>
    );
};

export default SaladItems;