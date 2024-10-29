import React from "react";
import { useState } from "react";
//const Counter = () => {
//  const [count, setCount] = useState(0);
//  const increment = () => {
//    setCount(count + 1);
//  };
//  const decrement = () => {
//    if (count < 1) {
//      alert("No..");
//      return;
//    }
//    setCount(count - 1);
//  };
//
//
//  return (
//    <>
//      <h1>{count}</h1>
//      <button onClick={increment}>+</button>
//      <button onClick={decrement}>-</button>
//      fr
//    </>
//  );
//};
export const UseState = () => {
  //const [friends, setFriends] = useState(["Sadaq", "Elmi"]);
  //const addONe = () => {
  //  setFriends([...friends, "Sadaa"]);
  //};
  //const removeONe = () => {
  //  setFriends(friends.filter((f) => f !== "Sadaq"));
  //};
  //const updateONe = () => {
  //  setFriends(friends.map((f) => (f === "Elmi" ? "Elmi Waye" : f)));
  //};

  //  const [movie, setMovie] = useState({
  //    title: "EqualiZer 3",
  //    rating: 7,
  //  });
  //  const handleClick = () => {
  //    //const copyMovie = {
  //    //  ...movie,
  //    //  rating: 10,
  //    //};
  //    setMovie({ ...movie, rating: 10 });
  //  };

  const [movies, setMovie] = useState([
    {
      id: 1,
      title: "EqualiZer 2",
      rating: 7,
    },
    {
      id: 2,
      title: "EqualiZer 3",
      rating: 12,
    },
  ]);

  const changeName = () => {
    setMovie(
      movies.map((m) => (m.id === 1 ? { ...movies, title: "change" } : m))
    );
  };
  return (
    <>
      {/*<Counter />*/}
      {/*{friends.map((f) => (
        <li key={Math.random}>{f}</li>
      ))}
      <button onClick={addONe}>addONe</button>
      <button onClick={removeONe}>removeONe</button>
      <button onClick={updateONe}>updateONe</button>*/}
      {/*<h1>{movie.title}</h1>
      <p>{movie.rating}</p>
      <button onClick={handleClick}>Change Rating </button>*/}

      {movies.map((movie) => (
        <li key={Math.random()}>{movie.title}</li>
      ))}
      <button onClick={changeName}>Change Name</button>
    </>
  );
};
