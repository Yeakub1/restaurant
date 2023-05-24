import React from 'react';

const ChefItems = ({items}) => {
    const { _id, name, recipe, image, price, category } = items;
    return (
      <div className="text-center mx-auto">
        <img src={image} alt="" />
        <h1 className="text-lg font-bold">{name}</h1>
        <h1 className="font-semibold">{price}</h1>

        <button className="w-full py-2 bg-blue-800 text-white bottom-0">
          Add to Cart
        </button>
        
      </div>
    );
};

export default ChefItems;