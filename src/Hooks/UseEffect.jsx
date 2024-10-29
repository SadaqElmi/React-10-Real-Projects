import React, { useEffect, useState } from "react";
export const UseEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);
  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={Math.random}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};
