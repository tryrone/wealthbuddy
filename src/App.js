import React from "react";
import Logo from "./static/logo.svg";
import { BrowserRouter, Link } from "react-router-dom";
// import "./styling/index.css";
import "./styles/app.css";
import "./auth.css";

const inputs = [
  {
    label: "Email",
    name: "login_email",
    type: "email",
    placeholder: "my@email.com",
    id: "login_email",
  },
  {
    label: "Password",
    name: "login_password",
    id: "login_password",
    type: "password",
    placeholder: "********",
  },
];

const Fieldset = ({
  label,
  name,
  type = "text",
  placeholder = "",
  id,
  register,
}) => (
  <fieldset className="mb-5" key={id}>
    <label className="block text-xs mb-2">{label}</label>
    <input
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
      ref={register}
      className="block w-72 text-xs p-3 border border-gray-400 rounded"
    />
  </fieldset>
);

function App() {
  return (
    <BrowserRouter>
      <main>
        <section className="h-screen w-screen setup-screens flex flex-col justify-center items-center">
          {/* <div
          className="leaf-left"
          dangerouslySetInnerHTML={{ __html: leafLeft }}
        ></div>
        <div
          className="leaf-right"
          dangerouslySetInnerHTML={{ __html: leafRight }}
        ></div> */}

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
              {inputs.map((inputCongfig) => (
                <Fieldset
                  {...inputCongfig}
                  key={inputCongfig.id}
                  register={() => null}
                />
              ))}
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
            </div>
          </div>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
