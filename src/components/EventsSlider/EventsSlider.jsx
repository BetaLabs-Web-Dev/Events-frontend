// App.js

import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./EventsSlider.css";

const images = [
  { path: "/cat1.png", name: "event 1", className: "event-class-1" },
  { path: "/cat2.png", name: "event 2", className: "event-class-2" },
  { path: "/cat3.png", name: "event 3", className: "event-class-3" },
  { path: "/cat4.png", name: "event 4", className: "event-class-4" },
];

function EventsSlider() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <h2 className="carousel-name">Past Events</h2>
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((imgObj, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={idx}>
              <img src={imgObj.path} alt={imgObj.name} />
              <p className="image-name">{imgObj.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default EventsSlider;
