import React from 'react';
import Items from '../../../Shared/Items/Items';
import useMenu from '../../../../Hooks/useMenu';
import { Link } from 'react-router-dom';

const PizzaItems = () => {
      const [menu] = useMenu();
      const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <section>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mt-16 ">
        {pizza.map((item) => (
          <Items key={item._id} item={item}></Items>
        ))}
      </div>
      <div className="text-center mb-20">
        <Link to="/shop">
          <button className="mt-10 btn btn-outline border-0 border-b-4 ">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PizzaItems;