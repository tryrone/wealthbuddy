import React from "react";
import Icon from "../../../static/logo.svg";
import { Link } from "react-router-dom";
import LeafLeftSvg from "shared-components/svgs/LeafLeftSvg";
import LeafRightSvg from "shared-components/svgs/LeafRightSvg";
// import Loading from 'shared-components/Loading';

function ForgotPasswordSuccess() {
  return (
    <section className="h-screen w-screen setup-screens flex flex-col justify-center items-center">
      <div className="leaf-left">
        <LeafLeftSvg />
      </div>
      <div className="leaf-right">
        <LeafRightSvg />
      </div>
      <div
        className={`auth-modal flex flex-col items-center bg-white fadeIn login-fieldset onboarding-wrap`}
      >
        {/* head */}
        <div className="flex flex-col items-center mb-6 setup-success">
          <i className="w-10 mb-4">
            <img src={Icon} alt="" />
          </i>
          {/* <h1 className="text-2xl font-medium">Password reset</h1>
                <p className="text-center mt-3 text-gray-500 leading-normal">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p> */}
        </div>

        <h1 className="text-2xl font-medium">Success</h1>
        <p className="text-center mt-3 text-gray-500 leading-normal">
          A default password has been sent to your email
        </p>

        <Link
          to="/"
          className="mt-4 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
        >
          Proceed to Login
        </Link>

        {/* footer */}
        <div className="mt-8 ">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-wb-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
export default ForgotPasswordSuccess;
