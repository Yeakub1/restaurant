import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../../Hooks/useCart';
import { FaTrash } from "react-icons/fa";
import SectionHeading from '../../../Shared/SectionHeading/SectionHeading';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDeleteItems = item => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: 'DELETE',
          headers: {
          'content-type': 'application/json'
          },
          body: JSON.stringify()
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        })
      }
    });
  }

    return (
      <div className="max-w-7xl mx-auto">
        <div className="lg:-mt-60 ">
          <SectionHeading
            subHeding={"---My Cart---"}
            heading={"WANNA ADD MORE?"}
          ></SectionHeading>
        </div>
        <div className="uppercase font-semibold flex justify-between items-center mb-5  text-3xl">
          <Helmet>
            <title>BISTRO BOSS | My Cart</title>
          </Helmet>
          <h2>
            Total Cart:{" "}
            <span className="text-red-600 font-bold">{cart.length}</span>
          </h2>
          <h2>
            Total Peice:{" "}
            <span className="text-red-600 font-bold">${total}</span>
          </h2>
          <button className="btn btn-warning btn-sm">pay</button>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-end">{item.price}</td>
                  <td
                    onClick={() => handleDeleteItems(item)}
                    className="text-red-600 float-right text-xl"
                  >
                    <FaTrash />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyCart;