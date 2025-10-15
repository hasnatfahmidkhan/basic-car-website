import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Cars from "../Pages/Cars/Cars";
import WishList from "../Pages/WishList/WishList";
import CarDetails from "../Pages/CarDetails/CarDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

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
        element: (
          <PrivateRoutes>
            <CarDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        Component: Profile,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);
