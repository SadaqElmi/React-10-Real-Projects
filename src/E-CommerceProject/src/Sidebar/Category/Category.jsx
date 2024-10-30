// src/Sidebar/Category/Category.jsx
import React from "react";
import "./Category.css";
import Input from "../../components/input/Input";

const Category = ({ handleRadioChange }) => {
  return (
    <>
      <h2 className="sidebar-title"> Category </h2>

      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleRadioChange}
          value=""
          name="category"
        />
        <span className="checkmark"></span>All
      </label>
      <Input
        handleRadioChange={handleRadioChange}
        value="sneakers"
        title="sneakers"
        name="category"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="flats"
        title="flats"
        name="category"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="sandals"
        title="Sandals"
        name="category"
      />
      <Input
        handleRadioChange={handleRadioChange}
        value="heels"
        title="Heels"
        name="category"
      />
    </>
  );
};

export default Category;
