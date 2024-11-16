import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../Components/Loader";

function PrivetRoute({ children }) {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return <Loader />;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/auth/login"></Navigate>;
}

export default PrivetRoute;
