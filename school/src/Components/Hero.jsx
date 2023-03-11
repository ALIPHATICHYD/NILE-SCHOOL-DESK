import React from "react";
import HeroImg from "../assets/Images/Image.svg";
import "../styles/Hero.css";
import { StyledButton } from "../styles/HomePage.js";
const Hero = () => {
  return (
    <section className="Hero">
      <div className="Hero-text">
        <div className="hero-heading">
          <h2>
            A good <span className="blue">#education</span> <br /> is always a
            foundation of <br />
            <span className="bright">A bright future</span>
          </h2>
        </div>
        <p className="hero-para">
          Join 95% of Nigeria. schools using 9jaschooldesk to <br /> engage kids
          and connect with families! Free for <br /> teachers, forever.
        </p>
        <StyledButton>
          Join Now
        </StyledButton>
      </div>
      <div className="Hero-Imgae">
        <img src={HeroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
