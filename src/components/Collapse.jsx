import { useState } from "react";
import chevron from "../assets/images/chevron-haut.png";

function Collapse({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  const collapseActivation = () => {
    setIsActive(!isActive);
  };

  return (
    <section
      className={`collapse${isActive ? " active" : ""}`}
      onClick={collapseActivation}
    >
      <h2>
        {title}
        <span>
          <img src={chevron} alt="Chevron" />
        </span>
      </h2>
      {typeof content === "string" ? <p>{content}</p> : content}
    </section>
  );
}

export default Collapse;
