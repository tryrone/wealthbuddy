import React from "react";
import LeafLeftSvg from "shared-components/svgs/LeafLeftSvg";
import LeafRightSvg from "shared-components/svgs/LeafRightSvg";
import { Link } from "react-router-dom";
import Logo from "static/logo.svg";
import "pages/auth/styles.css";

const Login = () => (
  <section className="h-screen w-screen setup-screens flex flex-col justify-center items-center">
    <div className="leaf-left">
      <LeafLeftSvg />
    </div>
    <div className="leaf-right">
      <LeafRightSvg />
    </div>

    <div
      className={`auth-modal flex flex-col items-center bg-white fadeIn ${"login-fieldset onboarding-wrap"}`}
    >
      <div className="flex flex-col items-center mb-6">
        <i className="w-10 mb-4">
          <img src={Logo} alt="" />
        </i>
        <h1 className="text-2xl font-medium">Sign in</h1>
      </div>

      <div className="w-72 mb-8 text-xs text-left">
        <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
          Error appears here
        </p>
      </div>

      <form onSubmit={() => null} className="flex flex-col items-center">
        <fieldset className="mb-5">
          <label className="block text-xs mb-2">Email</label>
          <input
            placeholder="my@email.com"
            type="email"
            id="login_email"
            name="login_email"
            className="block w-72 text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="mb-5">
          <label className="block text-xs mb-2">Password</label>
          <input
            placeholder="********"
            type="password"
            id="login_password"
            name="login_password"
            className="block w-72 text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="w-full justify-between flex items-center">
          <Link
            to="/forgot-password"
            className="forgot-password text-gray-500 "
          >
            Forgot Password?
          </Link>
        </fieldset>
        <button
          className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
        >
          Login
        </button>
      </form>

      <div className="mt-8 ">
        <p className="text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-wb-primary">
            Sign Up
          </Link>
        </p>
        <Link to="/forgot-pass" className="text-wb-primary text-center">
           <p> Forgot password?</p>
          </Link>
      </div>
    </div>
  </section>
);

export default Login;
