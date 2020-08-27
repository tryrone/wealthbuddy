import React from "react";
import { useFormikContext } from "formik";

const PasswordStrengthMeter = ({ passwordField = "password" }) => {
  const { values } = useFormikContext();

  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.match(/[a-z]+/)) {
      strength += 25;
    }
    if (password.match(/[A-Z]+/)) {
      strength += 25;
    }
    if (password.match(/[0-9]+/)) {
      strength += 25;
    }
    if (password.match(/[$@#&!]+/)) {
      strength += 25;
    }

    return strength;
  };

  const passwordStrength = getPasswordStrength(values[passwordField]);

  const passwordColorAndGrades = {
    0: { color: "#ffffff", grade: "" },
    25: { color: "#ff3a3a", grade: "very weak" },
    50: { color: "#ff8800", grade: "weak" },
    75: { color: "#ffee00", grade: "strong" },
    100: { color: "#13ffae", grade: "very strong" },
  };

  return (
    <div className="pt-2">
      <div className="flex flex-row justify-between text-gray-300">
        <div className="text-left font-semi-bold text-sm py-1 mr-2 w-1/2 truncate">
          Password strength
        </div>
        <div className="text-right text-sm py-1">
          {passwordColorAndGrades[passwordStrength].grade}
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-meter bg-red-700"
          style={{
            width: `${passwordStrength}%`,
            backgroundColor: passwordColorAndGrades[passwordStrength].color,
          }}
        />
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;
