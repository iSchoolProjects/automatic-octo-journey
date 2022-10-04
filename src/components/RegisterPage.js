import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

export default function RegisterPage() {
  const [{ username, email, password, repeatPassword }, setRegisterData] =
    useState({
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    });

  function changeHandler(e) {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="register-page">
      <img width="100%" src="/images/header-bg.png" alt="" />
      <div className="card">
        <Link to="/">Login</Link>
      </div>
      <form>
        <div className="flex">
          <img src="/images/user.png" alt="" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            name="username"
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <hr className="divider" />

        <div className="flex">
          <img src="/images/email.png" alt="" />
          <input
            type="email"
            placeholder="Email"
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

        <hr className="divider" />

        <div className="flex">
          <img src="/images/computer.png" alt="" />
          <input
            type="password"
            placeholder="Repeat Password"
            value={repeatPassword}
            name="repeatPassword"
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <button type="button" className="btn-submit">
          <img
            width={24}
            height={24}
            src="/images/right-arrow-white.png"
            alt=""
          />
        </button>
      </form>

      <div className="container-social-media text-center">
        <SocialLogin />
      </div>
      <img
        className="footer-bg"
        width="100%"
        src="/images/footer-bg.png"
        alt=""
      />
    </div>
  );
}
