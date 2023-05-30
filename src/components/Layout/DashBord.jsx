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
} from "react-icons/fa";


const DashBord = () => {
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
