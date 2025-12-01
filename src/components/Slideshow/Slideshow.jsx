import './Slideshow.scss';
import { useState } from "react";
import arrowBack from "../../assets/arrow_back.png";
import arrowForward from "../../assets/arrow_forward.png";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;

  const nextSlide = () => {
    setCurrentIndex((next) => (next === total - 1 ? 0 : next + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  return (
    <div className="carrousel">
      <img
        src={pictures[currentIndex]}
        alt={`slide-${currentIndex}`}
        className="carrousel__image"
      />

      {total > 1 && (
        <>
          <img
            src={arrowBack}
            alt="previous slide"
            className="carrousel__arrow carrousel__arrow--left"
            onClick={prevSlide}
          />

          <img
            src={arrowForward}
            alt="next slide"
            className="carrousel__arrow carrousel__arrow--right"
            onClick={nextSlide}
          />

          <div className="carrousel__counter">
            {currentIndex + 1}/{total}
          </div>
        </>
      )}
    </div>
  );
}

export default Slideshow;