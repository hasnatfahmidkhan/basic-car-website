import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Cars from "../Pages/Cars/Cars";
import WishList from "../Pages/WishList/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "cars",
        Component: Cars,
      },
      {
        path: "wishlist",
        Component: WishList,
      },
    ],
  },
]);
