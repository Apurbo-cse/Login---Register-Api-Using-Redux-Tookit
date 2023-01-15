import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email, password);
  };
  return (
    <>
      <div className="container ">
        <div className="col-md-4 mt-5">
          <div className="form-group mb-2">
            <label for="">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-2">
            <label for="">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button onClick={handleLogin} className="my-3 btn btn-primary">
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
