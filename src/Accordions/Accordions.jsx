import React, { useState } from "react";
import "./style.css";
const Accordions = ({ title, content }) => {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <section className="accordion-card">
        <div className="header" onClick={() => setActive(!isActive)}>
          <div>{title}</div>
          <p className="icon">{isActive ? "-" : "+"}</p>
        </div>
        <div className="content">
          {isActive && <p className="card-info"> {content}</p>}
        </div>
      </section>
    </>
  );
};

export default Accordions;
