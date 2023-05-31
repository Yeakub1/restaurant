import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";

import Home from "../components/Pages/Home/Home/Home";
import Menu from "../components/Pages/Menu/Menu/Menu";
import Shop from "../components/Pages/Shop/Shop/Shop";
import Login from "../components/Authentication/LogIn/Login";
import Registion from "../components/Authentication/Register/Registion";
import PrivateRoutes from "./PrivateRoutes";
import Private from "../components/Shared/private/Private";
import DashBord from "../components/Layout/DashBord";
import MyCart from "../components/Pages/DashBord/MyCart/MyCart";
import AllUsers from "../components/Pages/DashBord/AllUsers/AllUsers";
import Contact from "../components/Pages/Contact Us/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registion></Registion>
      },
      {
        path: "/private",
        element: <PrivateRoutes><Private></Private></PrivateRoutes>
      },
    ],
  },
  {
    path: '/dashbord',
    element: <PrivateRoutes><DashBord></DashBord>,</PrivateRoutes>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      },
      {
        path: 'allusers',
        element: <AllUsers></AllUsers>
      },
    ]
  }
]);
