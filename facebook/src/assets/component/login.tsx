import { useState } from "react";
import "./login.css";

function Login() {
  return (
    <>
      <div>
        <div className="text-center">
          <h1>Facebook</h1>
        </div>
        <div className="container d-flex  justify-content-center justify-items-center lg-size">
          <form className="m-2 form-size">
            <h3 className="h3 mb-3 fw-normal text-center">
              Log in to Facebook
            </h3>

            <div className="form-floating col-12">
              <input
                type="email"
                className="form-control m-2"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">
                Email address or Phone Number
              </label>
            </div>
            <div className="form-floating m-2 col-12">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3 text-center">
              <a href="">forgetten password?</a>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
