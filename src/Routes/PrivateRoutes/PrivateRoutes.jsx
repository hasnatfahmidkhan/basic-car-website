import { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, authLoading } = use(AuthContext);
  const location = useLocation();
  if (authLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-xl text-success "></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={location?.pathname} />;
};

export default PrivateRoutes;
