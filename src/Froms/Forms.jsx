import React, { useState } from "react";

export const Forms = () => {
  const [username, setUsername] = useState("");
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefualt;
    alert(`You Typed: ${username}`);
    setUsername("");
  };
  return (
    <>
      <h1>Form Demo </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </>
  );
};
