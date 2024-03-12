import React from "react";
import "./Hero.css";
import Carousel from '../Carousel/Carousel'
const Hero = () => {
  return (
    <div className="flex flex-row justify-between px-[5vw] items-center font-josefin pt-[20vh] pb-[12vh]">
      <div className="flex flex-col w-[55%] gap-10 pt-5">
        <div className="text-[4.5vw] font-bold gradient-text">DISCOVER, ENGAGE & ELEVATE</div>
        <div className="flex items-center bg-gray-900 border-2 border-purple-800 hover:border-purple-500 rounded-xl w-fit">
          <input
            type="text"
            placeholder="Search an Event"
            className="w-full px-5 text-2xl text-gray-200 bg-gray-900 focus:outline-none"
          />
          <div class="border-r border-purple-500 h-14"></div>
          <button className="p-3">
            <img src='/assets/action_key.svg' alt="Action Key" />
          </button>
        </div>
        <div className="text-[2.7vw] font-semibold">
          Your Gateway to Unforgettable College Events!
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center gap-6">
        <div className="text-3xl font-semibold font-josefin">UPCOMING</div>
        <div className="">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Hero;