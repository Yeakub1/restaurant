import React from "react";
import { NavLink,  Outlet } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaShoppingCart,
  FaMoneyCheckAlt,
  FaStar,
  FaCalendarCheck,
  FaAlignLeft,
  FaShoppingBag,
  FaFacebookMessenger,
  FaListUl,
  FaBook,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";


const DashBord = () => {

  // TODO 
  const isAdmin = true;

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  uppercase">
            {isAdmin ? (
              <>
                {" "}
                <li>
                  <NavLink to="/dashbord/home">
                    <FaHome /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashbord/additem">
                    <FaUtensils /> add items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashbord/mycart">
                    <FaListUl /> manage items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashbord/booking">
                    <FaBook /> Manage bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashbord/allusers">
                    <FaUsers /> all users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <NavLink>
                    <FaHome /> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaCalendarAlt /> reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashbord/mycart">
                    <FaShoppingCart /> My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaMoneyCheckAlt /> payment history
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaStar /> add review
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaCalendarCheck /> my booking
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <FaAlignLeft /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">
                <FaShoppingBag /> Shop
              </NavLink>
            </li>
            <li>
              <NavLink>
                <FaFacebookMessenger /> contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBord;
