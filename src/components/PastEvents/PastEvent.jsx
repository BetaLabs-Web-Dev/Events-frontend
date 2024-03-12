import React, { useState } from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./PastEvent.css";
import EventCard from "../EventCard/Eventcard"

const images = [
  <EventCard  />,
  <EventCard />,
  <EventCard />,
  <EventCard />,
  <EventCard />,
  <EventCard />,
  <EventCard />
];

function EventsSlider() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <ArrowForwardIosIcon />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <ArrowBackIosIcon />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    autoplay:true,
    autoplaySpeed:2500,
    slidesToShow: 3,
    focusOnSelect:true,
    centerMode: true,
    centerPadding: "7.5rem",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="pb-10 App">
      <h2 className="my-6 text-3xl font-semibold text-center font-inter">Past Events</h2>
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((imgObj, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={idx}>
              {imgObj}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default EventsSlider;