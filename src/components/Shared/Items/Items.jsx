import React from "react";

const Items = ({ item }) => {
  const { _id, name, recipe, image, price, category } = item;
  return (
    <div className="flex gap-8 mx-auto">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[105px]"
        src={image}
        alt=""
      />
      <div className="">
        <div className="flex justify-between">
          <h1 className="uppercase font-bold "> {name}</h1>
          <p className="font-semibold text-yellow-600"> {price}</p>
        </div>
        <h1>{recipe}</h1>
      </div>
    </div>
  );
};

export default Items;
