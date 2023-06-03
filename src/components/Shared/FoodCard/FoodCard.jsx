import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';

const FoodCard = ({ item }) => {
  const { _id, name, recipe, image, price, category } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleAddToCart = item => {
    console.log(item);
    if (user && user.email) {
   const cartItem = { menuItemId: _id, name, image, price, email: user.email };
   fetch("http://localhost:5000/carts", {
     method: "POST",
     headers: {
       "content-type": "application/json",
     },
     body: JSON.stringify(cartItem),
   })
     .then((res) => res.json())
     .then((data) => {
       if (data.insertedId) {
         refetch();
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: "Your Selected Food saved",
           showConfirmButton: false,
           timer: 1500,
         });
       }
     });
    }
    else {
      Swal.fire({
        title: "Plase Login add to the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  }

    return (
      <div className="text-center mx-auto relative">
        <div className="rounded-md  ">
          <img className="w-full h-80" src={image} alt="" />
        </div>
        <h1 className="text-lg font-bold">{name}</h1>
        <h1 className="font-semibold bg-black text-white px-3 absolute right-0 top-0 mr-4  mt-2">
          $ {price}
        </h1>
        <h1>{recipe}</h1>
        <button
          onClick={() => handleAddToCart(item)}
          className="mt-10 btn btn-outline bg-slate-200 border-0 border-b-4 "
        >
          Add to Cart
        </button>
      </div>
    );
};

export default FoodCard;