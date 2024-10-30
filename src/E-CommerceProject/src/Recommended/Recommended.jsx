// src/Recommended/Recommended.jsx
import React, { useContext } from "react";
import { ProductContext } from "../components/productContext/ContextApi";
import Button from "../components/Buttons/Button";

const Recommended = () => {
  const { handleClick } = useContext(ProductContext); // Get the handler from context

  return (
    <div>
      <h2 className="my-[20px] ml-[22rem] text-[20px]">Recommended</h2>
      <div className="flex ml-[22rem]">
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button onClickHandler={handleClick} value="Nike" title="Nike" />
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleClick} value="Puma" title="Puma" />
        <Button onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  );
};

export default Recommended;
