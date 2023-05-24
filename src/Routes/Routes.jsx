import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";

import Home from "../components/Pages/Home/Home/Home";
import Menu from "../components/Pages/Menu/Menu/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
            path: "/",
          element: <Home></Home>
      },
      {
            path: "/menu",
          element: <Menu></Menu>
      }
    ],
  },
]);
