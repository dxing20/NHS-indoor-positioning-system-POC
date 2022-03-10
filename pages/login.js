import React, { useState } from "react";
import Profile from "../components/Authentication/Profile";

const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [apiToken, setApiToken] = useState("");
  let [jwt, setJwt] = useState("");

  return (
    <Profile
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />
  );
}

export default Login;