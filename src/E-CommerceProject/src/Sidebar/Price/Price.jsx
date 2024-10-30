import React from "react";
import Input from "../../components/input/Input";

const Price = ({ handleRadioChange }) => {
  return (
    <>
      <h2 className="sidebar-title"> Price </h2>
      <div className="">
        <label className="sidebar-label-container">
          <input
            type="radio"
            onChange={handleRadioChange}
            value=""
            name="tes2"
          />
          <span className="checkmark"></span>All
        </label>
      </div>
      <Input
        handleRadioChange={handleRadioChange}
        value={50}
        title="0 -50"
        name="test2"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value={100}
        title="50 -100"
        name="test2"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value={150}
        title="100 -150"
        name="test2"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value={200}
        title="Over150"
        name="test2"
      />
    </>
  );
};

export default Price;
