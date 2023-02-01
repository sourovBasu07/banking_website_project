import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`${styles} font-medium font-poppins text-primary text-[18px] bg-blue-gradient outline-none rounded-[10px] px-6 py-4`}
    >
      Get Started
    </button>
  );
};

export default Button;
