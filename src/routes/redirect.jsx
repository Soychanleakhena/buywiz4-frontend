import { Navigate } from "react-router-dom";
import { webRoutes } from "./web";

const Redirect = () => {
  const isLogin = localStorage.getItem("token");

  return (
    <Navigate to={isLogin ? webRoutes.dashboard : webRoutes.login} replace />
  );
};

export default Redirect;
