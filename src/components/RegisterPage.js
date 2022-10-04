import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  return (
    <div className="register-page">
      <img width="100%" src="/images/header-bg.png" alt="" />
      <div className="card">
        <Link to="/">
          Login
        </Link>
      </div>
      <form>
        <div className="flex">
          <img src="/images/user.png" alt="" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <hr className="divider" />

        <div className="flex">
          <img src="/images/email.png" alt="" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <hr className="divider" />

        <div className="flex">
          <img src="/images/computer.png" alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <hr className="divider" />

        <div className="flex">
          <img src="/images/computer.png" alt="" />
          <input
            type="password"
            placeholder="Repeat Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>

        <button type="button" className="btn-submit">
          <img width={24} height={24} src="/images/right-arrow-white.png" alt="" />
        </button>
      </form>

      <div className="container-social-media text-center">
        <p>Or sign in with</p>
        <div className="holder-social-media">
          <button className="btn-rounded-gray">
            <a href="#" target="target_blank">
              <img src="/images/facebook.png" alt="" />
            </a>
          </button>
          <button className="btn-rounded-gray">
            <a href="#" target="target_blank">
              <img src="/images/twitter.png" alt="" />
            </a>
          </button>
          <button className="btn-rounded-gray">
            <a href="#" target="target_blank">
              <img src="/images/g.png" alt="" />
            </a>
          </button>
          <button className="btn-rounded-gray">
            <a href="#" target="target_blank">
              <img src="/images/instagram.png" alt="" />
            </a>
          </button>
        </div>
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
