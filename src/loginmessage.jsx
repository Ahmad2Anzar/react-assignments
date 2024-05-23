// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{isLoggedIn? <p>Hello user</p>: <p>Access denied</p> }</div>;
}

export default LoginMessage;
