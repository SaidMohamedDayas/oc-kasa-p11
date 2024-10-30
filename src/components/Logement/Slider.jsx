import chevronRight from "../../assets/images/chevron-droit.png";
import chevronLeft from "../../assets/images/chevron-gauche.png";

import { useState } from "react";

function Slider({ slider }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderLength = slider.length;

  const onNext = () => {
    const lastImg = slideIndex === sliderLength - 1;
    const thisIndex = lastImg ? 0 : slideIndex + 1;
    setSlideIndex(thisIndex);
  };

  const onPrev = () => {
    const firstImg = slideIndex === 0;
    const thisIndex = firstImg ? sliderLength - 1 : slideIndex - 1;
    setSlideIndex(thisIndex);
  };

  return (
    <section className="slider">
      {sliderLength > 1 && (
        <>
          <img
            src={chevronLeft}
            className="slider__chevron-gauche"
            alt="Chevron gauche"
            onClick={onPrev}
          />
          <img
            src={chevronRight}
            className="slider__chevron-droit"
            alt="Chevron droit"
            onClick={onNext}
          />
        </>
      )}
      <div className="slider__images">
        {slider.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`${index + 1}`}
            style={{ display: index === slideIndex ? "block" : "none" }}
          />
        ))}
        {/* Indicateur du numéro de l'image */}
        <div className="slider__images__index">
          {slideIndex + 1}/{sliderLength}
        </div>
      </div>
    </section>
  );
}

export default Slider;
