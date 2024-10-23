import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextProvider } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(ContextProvider);
  const location = useLocation();

  if (loader) {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-10">
        <h2 className="text-3xl text-blue-950 font-mono">Loading....</h2>
        <progress className="progress w-56 text-center"></progress>
      </div>
    );
  }

  return user ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location }}></Navigate>
  );
};

export default PrivateRoute;
