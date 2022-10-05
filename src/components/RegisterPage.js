import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InvalidField } from "../shared/functions/GetInvalidField";
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

  function doRegister() {
    const userData = {
      username: username,
      email: email,
      password: password,
      repeatPassword: repeatPassword,
    };
    const errors = [];

    InvalidField(userData, errors);

    if (!!errors?.length) {
      alert(errors);
    } else {
      const localstorageItems = JSON.parse(localStorage.getItem("users"));
      const users = localstorageItems;

      if (!!localstorageItems?.length) {
        if (!localstorageItems?.some((user) => user.email === userData.email)) {
          users.push(userData);
          localStorage.setItem("users", JSON.stringify(users));
        } else {
          return alert("User aleardy exist");
        }
      } else {
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));
      }
      alert("you are register");
    }
  }

  return (
    <div className="register-page">
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

        <button type="button" className="btn-submit" onClick={doRegister}>
          <img
            width={24}
            height={24}
            src="/images/right-arrow-white.png"
            alt=""
          />
        </button>
      </form>

      <SocialLogin />
    </div>
  );
}
