import React, { useEffect, useState } from "react";
import axios from "axios";
const MealApi = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h2>Meal Api with Axios</h2>
      {items.length > 0 ? (
        items.map(({ strMeal, strMealThumb, idMeal }) => {
          return (
            <section className="card" key={idMeal}>
              <img src={strMealThumb} alt={strMeal} />
              <section className="content">
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
              </section>
            </section>
          );
        })
      ) : (
        <p>Loading meals...</p> // Optional loading message while data is being fetched
      )}
    </>
  );
};

export default MealApi;
