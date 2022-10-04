import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InvalidField } from "../shared/functions/GetInvalidField";
import SocialLogin from "./SocialLogin";

export default function LoginPage() {
  const [{ email, password }, setLoginData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(e) {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function doLogin() {
    const users = JSON.parse(localStorage.getItem("users"));
    const userData = {
      email: email,
      password: password,
    };
    const errors = [];

    InvalidField(userData, errors);

    if (!!errors?.length) {
      alert(errors);
    } else {
      if (!users?.some((user) => user.email === userData.email)) {
        return alert("Invalid email");
      }

      if (!users?.some((user) => user.password === userData.password)) {
        return alert("Invalid password");
      }

      alert("Logged in");
    }
  }

  return (
    <div className="login-page">
      <form>
        <div className="flex">
          <img src="/images/user.png" alt="" />
          <input
            type="text"
            placeholder="Username or email"
            value={email}
            name="email"
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <hr className="divider" />

        <div className="flex">
          <img src="/images/computer.png" alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <button type="button" className="btn-submit" onClick={() => doLogin()}>
          <img
            width={24}
            height={24}
            src="/images/right-arrow-white.png"
            alt=""
          />
        </button>
      </form>

      <p className="forgot-password">Forgot your password?</p>

      <div className="card">
        <Link to="/register">Register</Link>
      </div>

      <SocialLogin />
    </div>
  );
}
