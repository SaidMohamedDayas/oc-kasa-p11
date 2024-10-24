import { useState } from "react";
import chevronHigh from "../assets/images/chevron-haut.png";
import chevronLow from "../assets/images/chevron-bas.png";

function Toggle(props) {
  const [setToggle, setToggleState] = useState("");
  const [setChevron, setChevronState] = useState({ chevronLow });

  const toggleActivation = () => {
    setToggleState(setToggle === "" ? "active" : "");

    setChevronState(setToggle === "active" ? { chevronLow } : { chevronHigh });
  };

  return (
    <section className={`toggle ${setToggle}`} onClick={toggleActivation}>
      <h2>
        {props.title}{" "}
        <span>
          <img
            src={Object.values(setChevron)}
            alt={Object.values(setChevron)}
          />
        </span>
      </h2>
      <p>{props.content}</p>
    </section>
  );
}

export default Toggle;
