import React from 'react';

const FoodCard = ({ item }) => {
        const { _id, name, recipe, image, price, category } = item;
    return (
      <div className="text-center mx-auto relative">
        <div className="rounded-md  ">
          <img className="w-full h-80" src={image} alt="" />
        </div>
        <h1 className="text-lg font-bold">{name}</h1>
        <h1 className="font-semibold bg-black text-white px-3 absolute right-0 top-0 mr-4  mt-2">
          $ {price}
        </h1>
        <p>{recipe}</p>
        <button className="mt-10 btn btn-outline bg-slate-200 border-0 border-b-4 ">
          Add to Cart
        </button>
      </div>
    );
};

export default FoodCard;