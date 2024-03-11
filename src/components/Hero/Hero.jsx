import React from "react";
import "./Hero.css";
import Carousel from '../Carousel/Carousel'
const Hero = () => {
  return (
      <div className="flex gap-20 px-5 font-josefin">
        <div className="flex flex-col w-3/5 gap-8">
            <div className="text-5xl font-bold gradient-text">DISCOVER, ENGAGE, and ELEVATE</div>
            <div className="flex items-center bg-gray-900 border-2 border-purple-500 rounded-xl w-fit">
              <input
                type="text"
                placeholder="Search an Event"
                className="w-full px-5 py-2 text-2xl text-gray-600 bg-gray-900 focus:outline-none"
              />
             <div class="border-r border-purple-500 h-14"></div>
              <button className="p-3 ">
                <img src='/assets/action_key.svg' alt="Action Key" />
              </button>
            </div>
          <div className="text-3xl font-bold ">
            Your Gateway to Unforgettable College Events!
          </div>
        </div>

        <div className="">
          <div className="text-3xl font-bold font-josefin">UPCOMING</div>
          <div className="">
            <Carousel />
          </div>
        </div>
      </div>
  );
};

export default Hero;