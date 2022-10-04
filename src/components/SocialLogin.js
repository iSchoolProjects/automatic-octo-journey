import React from "react";

export default function SocialLogin() {
  return (
    <div className="container-social-media text-center">
      <p>Or sign in with</p>
      <div className="holder-social-media">
        <button className="btn-rounded-gray">
          <img src="/images/facebook.png" alt="" />
        </button>
        <button className="btn-rounded-gray">
          <img src="/images/twitter.png" alt="" />
        </button>
        <button className="btn-rounded-gray">
          <img src="/images/g.png" alt="" />
        </button>
        <button className="btn-rounded-gray">
          <img src="/images/instagram.png" alt="" />
        </button>
      </div>
    </div>
  );
}
