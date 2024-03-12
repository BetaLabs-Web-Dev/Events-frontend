import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import Carousel from '../Carousel/Carousel';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-[5vw] items-center pt-[12vh] md:pt-[20vh] pb-[2vh] md:pb-[12vh] gap-[40px] md:gap-4">
      <div className="flex flex-col w-[78vw] md:w-[55%] gap-4 md:gap-10 pt-5">
        <div className="text-[30px] md:text-[4.5vw] font-bold gradient-text">DISCOVER, ENGAGE & ELEVATE</div>
        <div className="hidden md:flex items-center bg-gray-900 border-2 border-purple-800 hover:border-purple-500 rounded-xl w-fit">
          <input
            type="text"
            placeholder="Search an Event"
            className="w-full px-5 text-2xl text-gray-200 bg-gray-900 focus:outline-none"
          />
          <div className="border-r border-purple-500 h-14"></div>
          <button className="p-3">
            <img src='/assets/action_key.svg' alt="Action Key" />
          </button>
        </div>
        <div className="text-[18px] md:text-[2.7vw] font-semibold">
          Your Gateway to Unforgettable College Events!
        </div>
        <div className="flex md:hidden flex-row justify-end">
          <Link to="/login" className="px-4 py-1 rounded-md text-[16px] font-medium login-btn">
            Login
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="text-3xl font-semibold font-josefin">UPCOMING</div>
        <div className="">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Hero;