// src/components/Buttons/Button.jsx
import React from "react";

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button
      className="py-[10px] px-[20px] mr-[6px] bg-transparent border-[0.6px] border-gray-300 rounded-[5px] text-[#323232] cursor-pointer"
      onClick={onClickHandler} // Ensure this is used
      value={value}
    >
      {title}
    </button>
  );
};

export default Button;
