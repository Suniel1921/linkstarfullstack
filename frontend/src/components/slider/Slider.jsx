import React, { useState, useEffect } from "react";
import "../slider/slider.css";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = ["/image/b1.jpg", "/image/b2.jpg", "/image/b3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider_container">
      {images.map((image, idx) => (
        <div
          key={idx}
          className={idx === index ? "slide active" : "slide"}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="text container">
            <p>Contet Heading goes here</p>
            <h2 className="heading">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deleniti, asperiores.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
