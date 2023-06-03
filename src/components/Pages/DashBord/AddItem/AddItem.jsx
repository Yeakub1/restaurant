import React from "react";
import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imgae_hosting = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddItem = () => {
  // const { axiosSecure } = useAxiosSecure();
  const token = localStorage.getItem("access-token");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const image_hostin_url = `https://api.imgbb.com/1/upload?key=${imgae_hosting}`;

  const onSubmit = (data) => {
    const fromData = new FormData();
    fromData.append("image", data.image[0]);
    fetch(image_hostin_url, {
      method: "POST",
      body: fromData,
    })
      .then((res) => res.json())
      .then((imgageResponse) => {
        if (imgageResponse.success) {
          const imgUrl = imgageResponse.data.display_url;
          const { name, price, recipe, Category } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            Category,
            recipe,
            image: imgUrl,
          };
          console.log(newItem);
          fetch("http://localhost:5000/menu", {
            method: "POST",
            headers: {
              authorization: `beraer ${token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Item added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          //  axiosSecure.post('/menu', newItem)
          //       .then(data => {
          //           console.log('after posting new menu item', data.data)
          //           if(data.data.insertedId){
          //               reset();
          //               Swal.fire({
          //                   position: 'top-end',
          //                   icon: 'success',
          //                   title: 'Item added successfully',
          //                   showConfirmButton: false,
          //                   timer: 1500
          //                 })
          //           }
          //       })
        }
      });
  };

  return (
    <div className="w-full px-12">
      <Helmet>
        <title>BISTRO BOSS | Add item</title>
      </Helmet>
      <section>
        <SectionHeading
          subHeding={"---Whats new?---"}
          heading={"ADD AN ITEM"}
        ></SectionHeading>
      </section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body bg-slate-300"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe name*</span>
          </label>

          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Recipe name"
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-800">Recipe name is required</span>
          )}
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>

            <select className="py-3 px-3 rounded-md" {...register("Category")}>
              <option disabled>Select</option>
              <option value="pizza">pizza</option>
              <option value="soup">soup</option>
              <option value="salad">salad</option>
              <option value="dessert">dessert</option>
              <option value="drinks">drinks</option>
              <option value="popular">popular</option>
              <option value="offered">offered</option>
            </select>
            {errors.Category && (
              <span className="text-red-800">Category is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>

            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Price"
              className="input input-bordered"
            />
            {errors.price && (
              <span className="text-red-800">Price is required</span>
            )}
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              cols="135"
              rows="5"
              placeholder="Recipe Details"
              className="rounded-md px-3 -mt-10"
            ></textarea>
            {errors.recipe && (
              <span className="text-red-800">Recipe Details is required</span>
            )}
          </div>
        </div>
        <div className="">
          <input type="file" {...register("image", { required: true })} />
          {errors.image && (
            <span className="text-red-800">image is required</span>
          )}
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
