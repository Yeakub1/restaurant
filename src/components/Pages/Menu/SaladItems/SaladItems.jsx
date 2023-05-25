import React from 'react';
import Items from '../../../Shared/Items/Items';
import useMenu from '../../../../Hooks/useMenu';

const SaladItems = () => {
    const [menu] = useMenu();
    const salad = menu.filter((item) => item.category === "salad");
    return (
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 mt-16 mb-20">
        {salad.map((item) => (
          <Items key={item._id} item={item}></Items>
        ))}
      </div>
    );
};

export default SaladItems;