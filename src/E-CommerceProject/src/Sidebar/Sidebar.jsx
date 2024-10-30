// src/Sidebar/Sidebar.jsx
import React, { useContext } from "react";
import { ProductContext } from "../components/productContext/ContextApi";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = () => {
  const { handleRadioChange } = useContext(ProductContext);

  return (
    <section className="w-[16%] fixed h-[100%] border-r-[0.6px] border-[#e5e5e5] z-[3] flex flex-col items-center ">
      <div className="mb-[4rem]  text-3xl ">
        <h1 className="mt-[1.3rem] ">🛒</h1>
      </div>
      <Category handleRadioChange={handleRadioChange} />
      <Price handleRadioChange={handleRadioChange} />
      <Colors handleRadioChange={handleRadioChange} />
    </section>
  );
};

export default Sidebar;
