import { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user } = use(AuthContext);
  const location = useLocation();
  console.log(location);
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default PrivateRoutes;
