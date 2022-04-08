import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { globalContext } from "../App";

const Login = () => {
  const user = useContext(globalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.logged) {
      navigate("/dashboard/");
    }
  });

  return <></>;
};

export default Login;
