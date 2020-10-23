import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button data-test="button" type="button" className="btn-default btn Ripple-parent" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;