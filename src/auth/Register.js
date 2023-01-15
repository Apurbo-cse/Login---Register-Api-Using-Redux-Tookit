import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerHandle = () => {
    console.table(name, setName, password);
  };
  return (
    <div className="container ">
      <div className="col-md-4 mt-5">
        <div className="form-group mb-2">
          <label for="">Username</label>
          <input
            type="name"
            className="form-control"
            placeholder="Email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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

        <button
          onClick={registerHandle}
          className="my-3 btn btn-primary"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Register;
