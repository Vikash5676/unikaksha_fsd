import React, { useEffect, useState } from "react";
import carousal1 from "../../assets/banner/crousal1.jpg";
import carousal2 from "../../assets/banner/crousal2.jpg";
import carousal3 from "../../assets/banner/crousal3.jpg";
import carousal4 from "../../assets/banner/crousal4.jpg";
import "../Crousal/Carousal.css";

const Crousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [carousal1, carousal2, carousal3, carousal4];

  const nextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 4000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="container_carousal">
    <div className="carousal">
      {images.map((image, index) => (
        <img
          key={index}
          className="carousel-slide"
          style={
            currentIndex === index
              ? { transform: `translatex(-${index * 100}%)`, opacity: 1 }
              : {}
          }
          src={image}
          alt={`Slide ${index}`}
        />
      ))}

      <div className="righr_toggle" onClick={nextSlide}>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      <div className="left_toggle" onClick={prevSlide}>
        <i class="fa-solid fa-chevron-left"></i>
      </div>
    </div>
    </div>
  );
};

export default Crousal;
