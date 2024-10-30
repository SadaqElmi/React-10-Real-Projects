// src/Navigation/Nav.jsx
import React, { useContext } from "react";
import { ProductContext } from "../components/productContext/ContextApi";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Navigation = () => {
  const { query, handleInput } = useContext(ProductContext);

  return (
    <nav className="flex border-b-2 border-solid border-[#f3f3f3] justify-around items-center p-[20px] z-[900] ml-[7rem]">
      <div>
        <input
          type="text"
          value={query}
          onChange={handleInput}
          className="py-[12px] px-[20px] border-none bg-[#f7f6f6] outline-none mr-[20px] rounded-[5px] relative w-[14rem]"
          placeholder="Enter Your Search Shoes"
        />
      </div>
      <div className="flex ">
        <a href="#">
          <FiHeart className="w-[1.5rem] h-[1.5rem] ml-[2rem] text-[#494949]" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="w-[1.5rem] h-[1.5rem] ml-[2rem] text-[#494949]" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="w-[1.5rem] h-[1.5rem] ml-[2rem] text-[#494949]" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
