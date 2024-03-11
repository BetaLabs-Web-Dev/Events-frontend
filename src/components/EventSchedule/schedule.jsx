import React, { useState } from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./schedule.css";
import EventCard from "../EventCard/Eventcard"
import ScheduleCard from "../ScheduleCard/ScheduleCard";

const images = [
  <ScheduleCard  />,
  <ScheduleCard />,
  <ScheduleCard />,
  <ScheduleCard />,
  <ScheduleCard />,
  <ScheduleCard />,
  <ScheduleCard />
];

function EventsSlider() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrowu nextu" onClick={onClick}>
        <ArrowForwardIosIcon />
      </div>
    );
  };

  // const PrevArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow prev" onClick={onClick}>
  //       <ArrowBackIosIcon />
  //     </div>
  //   );
  // };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 1500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "21rem",
    nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="relative flex flex-col justify-center gap-5 my-6">
      <div className="relative ">
        <Slider {...settings}>
          {images.map((imgObj, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={idx}>
              {imgObj}
            </div>
          ))}
        </Slider>
      </div>
      <button className="self-center px-3 py-2 text-2xl font-semibold rounded-lg cursor-pointer font-inter w-fit h-fit gredientbut">See more</button>
    </div>
  );
}

export default EventsSlider;