import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";

import Footer from "../components/Shared/Footer/Footer";
import Home from "../components/Pages/Home/Home/Home";

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
            path: "/footer",
          element: <Footer></Footer>
      },
    ],
  },
]);
