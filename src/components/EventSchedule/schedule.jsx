import React, { useState } from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./schedule.css";
import ScheduleCard from "./ScheduleCard";

const images = [
  <ScheduleCard />,
  <ScheduleCard />,
  <ScheduleCard />,
  <ScheduleCard />,
  <ScheduleCard />,
  <ScheduleCard />,
  <ScheduleCard />
];

function Schedule() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrowu top-[53%] right-0 md:right-[10%] lg:right-[20%]" onClick={onClick}>
        <ArrowForwardIosIcon />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow top-[53%] left-2 md:left-[10%] lg:left-[20%]" onClick={onClick}>
        <ArrowBackIosIcon />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 1500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="relative flex flex-col justify-center gap-5 my-6">
      <div className="">
        <Slider {...settings}>
          {images.map((imgObj, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={idx}>
              {imgObj}
            </div>
          ))}
        </Slider>
      </div>
      <button className="self-center px-4 py-2 text-[18px] md:text-[22px] font-medium rounded-md cursor-pointer gredientbut">See more</button>
    </div>
  );
}

export default Schedule;