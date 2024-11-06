import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <input placeholder="username" id="wd-signup-username" className="form-control mb-2"/>
      <input placeholder="password" type="password" id="wd-signup-password" className="form-control mb-2" />
      <input placeholder="verify password" type="password" id="wd-signup-verify" className="form-control mb-2"/>
      <Link to="/Kanbas/Account/Profile" id='wd-signup-btn' className="btn btn-primary w-100" >Sign up</Link>
      <Link to="/Kanbas/Account/Signin" id="wd-signin-link" >Sign in</Link>
    </div>
    );
}
