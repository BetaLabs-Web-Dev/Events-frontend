import React, { useState } from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./PastEvent.css";
import EventCard from "./Eventcard"

const images = [
  <EventCard />,
  <EventCard />,
  <EventCard />,
  <EventCard />,
  <EventCard />,
  <EventCard />,
  <EventCard />
];

function PastEvent() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow top-[40%] right-[3vw] md:right-[30%]" onClick={onClick}>
        <ArrowForwardIosIcon />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow top-[40%] left-[3vw] md:left-[30%]" onClick={onClick}>
        <ArrowBackIosIcon />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "10.4vw",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "2vw",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "27vw",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "17vw",
        },
      }
    ]
  };

  return (
    <div className="p-10 past-events flex flex-col">
      <h2 className="mb-8 text-[36px] font-bold text-center">Past Events</h2>
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

export default PastEvent;