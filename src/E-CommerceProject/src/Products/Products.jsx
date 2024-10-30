// src/Products/Products.jsx
import React, { useContext } from "react";
import { ProductContext } from "../components/productContext/ContextApi";
import Card from "../components/Card/Card";

const Products = () => {
  const { result } = useContext(ProductContext);

  return (
    <section className="flex flex-wrap ml-[22rem] mt-[2rem] z-[-2]">
      {result.map((product) => (
        <Card key={Math.random()} {...product} />
      ))}
    </section>
  );
};

export default Products;
