import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../context";

export const LoginPage = () => {
  const { login } = useContext(Authcontext);

  const navigate = useNavigate();
  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    login("Samir Checcllo");

    navigate(lastPath, { replace: true });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
