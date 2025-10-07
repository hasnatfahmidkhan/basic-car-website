import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Cars from "../Pages/Cars/Cars";
import WishList from "../Pages/WishList/WishList";
import CarDetails from "../Pages/CarDetails/CarDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/cars",
        Component: Cars,
      },
      {
        path: "/wishlist",
        Component: WishList,
      },
      {
        path: "/car-details/:id",
        Component: CarDetails,
      },
    ],
  },
]);
