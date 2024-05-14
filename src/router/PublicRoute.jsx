import { useContext } from "react";
import { Authcontext } from "../auth";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(Authcontext);

  return !logged ? children : <Navigate to="/marvel" />;
};
