import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="m-[20px] border-2 border-solid border-[#ededde] p-[20px] cursor-pointer">
        <img className="w-[13rem] mb-[1rem] " src={img} alt={title} />
        <div>
          <h3 className="mb-[1rem] ">{title}</h3>
          <section className="mb-[1rem] flex items-center  ">
            {star}
            {star}
            {star}
            {star}
            <span className="font-[1rem] ml-[10px]">{reviews}</span>
          </section>
          <section className="flex justify-around items-center">
            <div>
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div>
              <FaShoppingBag className="text-[#535353]" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
