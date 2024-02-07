import React from "react";
import Carousel from "../Carousel/Carousel";
import "../Hero/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="first-section">
        <div className="left-container">
          {/* Heading text */}
          <div className="title">
            <div className="gradient-text">DISCOVER, ENGAGE, and ELEVATE</div>
          </div>

          {/* Input field */}
          <div className="search-section">
            <div className="gradient-mask"></div>
            <input
              type="text"
              placeholder="search the events"
              className="search-input"
            />
            <div className="divider"></div>
            <div className="action-key">
              <img src="./assets/action_key.svg" alt="Action Key" />
            </div>
          </div>

          {/* Description */}
          <div className="description">
            Your Gateway to Unforgettable College Events!
          </div>
        </div>

        <div className="right-container">
          <div className="upcoming-title">UPCOMING</div>
          <div className="carousel-container">
            <Carousel />
          </div>
        </div>
      </div>

      {/* BETA LABS */}
      <div className="second-section">
        <div className="outer-container">
          <img
            src="./assets/betalabs.png"
            className="beta-labs image"
            alt="Beta Labs"
          />
          <div className="inner-container">
            <div className="random-title">Beta Lab's</div>
            <div className="random-white-text">Android Development</div>
            <div className="random-gray-text">
              HERE IS THE PARAGRAPH OF BETA LABS
            </div>
            <button className="random-button">
              <span className="random-gradient"></span>
              <span className="random-button-text">Register</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
