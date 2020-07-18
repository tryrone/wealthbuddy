import React from "react";
import Icon from "assets/img/signup_success.svg";
import "../../styles.css";
import {Link} from "react-router-dom";

const SignUpSuccess = () => (
  <section className="h-screen w-full setup-screens flex flex-col justify-center items-center leafy-bg">
    <div className="flex flex-col items-center bg-white fadeIn login-fieldset auth-modal">
      <div className="flex flex-col items-center setup-success mb-6">
        <i className="w-10 mb-4">
          <img src={Icon} alt="" />
        </i>
        <h1 className="text-2xl font-medium mb-2">Success</h1>
        <p className="text-center text-gray-500 leading-normal">
          Your account has been created successfully
        </p>
      </div>

      <Link
        to="/auth/login"
        className="w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm mt-8"
      >
        Proceed to Login
      </Link>
    </div>
  </section>
);

export default SignUpSuccess;
