import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h1 className="text-3xl font-bold text-center mt-4">Register</h1>
        <div className="card-body">
          <form>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                {/* <a className="link link-hover">Forgot password?</a> */}
                {
                  // show error or message
                }
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p>
            Already have an account?{" "    }
            <Link to={"/login"} className="hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
