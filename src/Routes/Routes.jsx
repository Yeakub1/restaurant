import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";

import Home from "../components/Pages/Home/Home/Home";
import Menu from "../components/Pages/Menu/Menu/Menu";
import Shop from "../components/Pages/Shop/Shop/Shop";
import Login from "../components/Authentication/LogIn/Login";
import Registion from "../components/Authentication/Register/Registion";
import PrivateRoutes from "./PrivateRoutes";
import Private from "../components/Shared/private/Private";

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
]);
