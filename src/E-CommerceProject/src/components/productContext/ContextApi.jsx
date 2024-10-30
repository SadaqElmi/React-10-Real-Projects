// src/context/ProductContext.jsx
import { createContext, useState } from "react";
import produts from "../../db/data";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Input filter handler
  const handleInput = (e) => setQuery(e.target.value);

  // Radio filter handler
  const handleRadioChange = (event) => setSelectedCategory(event.target.value);

  // Button filter handler
  const handleClick = (event) => setSelectedCategory(event.target.value);

  const filteredItems = produts.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  function filterData(produts, selected, query) {
    let filteredProducts = produts;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts;
  }

  const result = filterData(produts, selectedCategory, query);

  return (
    <ProductContext.Provider
      value={{
        handleInput,
        handleRadioChange,
        handleClick,
        result,
        query,
        selectedCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
