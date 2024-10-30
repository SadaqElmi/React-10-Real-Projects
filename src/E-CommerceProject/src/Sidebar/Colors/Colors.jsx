import React from "react";
import Input from "../../components/input/Input";

const Colors = ({ handleRadioChange }) => {
  return (
    <>
      <h2 className="sidebar-title"> Colors </h2>
      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleRadioChange}
          value=""
          name="test1"
        />
        <span className="checkmark"></span>All
      </label>
      <Input
        handleRadioChange={handleRadioChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleRadioChange}
          value="white"
          name="test1"
        />
        <span className="checkmark bg-white border-2 border-[#ccc]"></span>{" "}
        White All
      </label>
    </>
  );
};

export default Colors;
