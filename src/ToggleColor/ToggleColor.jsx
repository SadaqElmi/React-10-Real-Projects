import React, { useState } from "react";
import "./ToggleColor.css";
function ToggleColor() {
  const [bgColor, setBgColor] = useState("white");
  const [TextColor, setTextColor] = useState("#1b1b1b");
  const [btnStyle, setBtnStyle] = useState("white");

  const handleClick = () => {
    setBgColor(bgColor === "white" ? "#1b1b1b" : "white");
    setTextColor(TextColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setBtnStyle(bgColor === "white" ? "#1b1b1b" : "white");
  };

  return (
    <>
      <section style={{ backgroundColor: bgColor, color: TextColor }}>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: btnStyle,
            color: TextColor,
            border: `2px solid ${TextColor}`,
          }}
        >
          {bgColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
        </button>
        <section className="content">
          <h1>Welcome To A</h1>
          Real Word
        </section>
      </section>
    </>
  );
}

export default ToggleColor;
