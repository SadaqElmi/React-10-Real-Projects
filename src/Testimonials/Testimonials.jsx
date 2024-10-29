import React, { useState } from "react";
import "./style.css";
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best project i've ever see",
      author: "SadaqElmi",
    },
    {
      quote: "This is the best project i've ever see 1",
      author: "SadaqElmi",
    },
    {
      quote: "This is the best project i've ever see 2",
      author: "Jacar Kumar",
    },
    {
      quote: "This is the best project i've ever see 3",
      author: "Jakar Waye ",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };
  const handlenNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };
  return (
    <>
      <div className="testimonials">
        <div className="testimonials-qoute">
          {testimonials[currentIndex].quote}
        </div>
        <div className="testimonials-aothor">
          {testimonials[currentIndex].author}
        </div>
        <testimonials className="nav">
          <button onClick={handlePrevClick}>Prev</button>
          <button onClick={handlenNextClick}>Next</button>
        </testimonials>
      </div>
    </>
  );
};

export default Testimonials;
