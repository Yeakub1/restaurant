import React, { useEffect, useState } from 'react';
import Items from '../../../Shared/Items/Items';

const BestItems = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
      fetch("menu.json")
        .then((res) => res.json())
        .then((data) => {
          const popularItems = data.filter(
            (item) => item.category === "dessert"
          );
          setMenu(popularItems);
        });
    }, []);
    return (
      <div className="grid grid-cols-2 gap-10 max-w-7xl mx-auto mt-20 mb-20">
            {
            menu.map(item=> <Items key={item._id} item={item}></Items>)    
        }
      </div>
    );
};

export default BestItems;