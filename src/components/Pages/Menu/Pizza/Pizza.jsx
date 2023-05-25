import React from "react";
import img from "../../../../assets/reservation/category-pizza.jpg";
import Service from "../../../Shared/Services/Service";

const Pizza = () => {
  return (
    <section>
      <Service
        heading={"pizza"}
        subHeding={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={img}
      ></Service>
    </section>
  );
};

export default Pizza;
