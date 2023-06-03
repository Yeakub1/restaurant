import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
const useCart = () => {
  const { user } = useContext(AuthContext);
  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};
export default useCart;

// const { refetch, data: cart = [] } = useQuery({
//     queryKey: ["carts", user?.email],
//     queryFn: async () => {
//       const res = await fetch(
//         `http://localhost:5000/carts?email=${user?.email}`,
//         {
//           headers: {
//             authorization: `beraer ${token}`,
//           },
//         }
//       );
//       return res.json();
//     },
//   });

//   return [cart, refetch];
// };